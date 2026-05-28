import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy initialization of Gemini client
let aiClient: GoogleGenAI | null = null;
const getAIClient = (): GoogleGenAI | null => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY missing - system operates in smart local simulation mode.");
    return null;
  }
  if (!aiClient) {
    try {
      aiClient = new GoogleGenAI({ apiKey });
    } catch (e) {
      console.error("Failed to initialize GoogleGenAI client:", e);
    }
  }
  return aiClient;
};

// System prompt instructing the AI how to act as Maria Teresa's AI Assistant for FacilissimoWeb
const SYSTEM_INSTRUCTION = `
Sei "FacilissimoWeb AI", l'assistente virtuale di Maria Teresa (fondatrice di FacilissimoWeb).
Il tuo obiettivo è fare una consulenza strategica preliminare e accogliente a micro-imprenditori, freelance e professionisti italiani interessati a:
1. Sviluppo Siti Web (Sia WordPress Strategico custom focalizzato sulle conversioni, sia Pure Code & Generative con React/HTML super veloci per massime performance).
2. Marketing Automation (Processi automatici, CRM, funnel e-mail, e workflow intelligenti con Make/Zapier per liberare tempo e risentire meno dello stress).
3. AI Integrations (Agenti di chat intelligenti, profilazione automatica del lead).

FILOSOFIA DI MARIA TERESA:
- Non progettare per i brand, progetta per le persone che interagiscono con i brand ("Don't design for brands. Design for people interacting with brands").
- Partner strategica, non solo fornitrice di servizi tecnici.
- Lavori boutique su misura, nessun pacchetto preconfezionato o copia-incolla svogliato.

LINEE GUIDA PER LE RISPOSTE:
- Rispondi ESPRESSAMENTE ed ESCLUSIVAMENTE in italiano.
- Mantieni un tono professionale, empatico, energico e orientato a far crescere il business del cliente.
- Spiega concetti tecnologici ostici con metafore semplici (es. "la tecnologia è un impianto idraulico, noi ci assicuriamo che l'acqua scorra fluida fino al bicchiere del cliente").
- Sii conciso (massimo 120-150 parole per risposta) ed evita muri di testo. Organizza i punti importanti con elenchi puntati puliti.
- Suggerisci gentilmente all'utente di visitare le pagine pertinenti del sito:
  * "Servizi" per approfondire il Customer Journey Visualizer.
  * "Chi Sono" per conoscere la storia accademica di Maria Teresa e il suo bento della metodologia.
  * "Journal" per leggere articoli dettagliati su Make e strategie di conversione.
  * "Contatti" per compilare il form intelligente ed ottenere una stima preliminare del progetto.
- Se l'utente chiede prezzi precisi, spiega che ogni progetto è una boutique su misura, ma compilando il form nella pagina Contatti riceverà subito una prima stima utile basata sul livello di automazione richiesto.
`;

// API routes
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messaggi mancanti o non validi.' });
  }

  const ai = getAIClient();
  if (!ai) {
    // Elegant Simulation fallback response
    const lastUserMessage = messages[messages.length - 1]?.content || '';
    const responseText = simulateServiceChat(lastUserMessage);
    return res.json({ reply: responseText, simulation: true });
  }

  try {
    // Format messages for @google/genai format
    // Map current chat window dialogue to Gemini format
    const formattedHistory = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    // Generate content using gemini-2.5-flash
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: SYSTEM_INSTRUCTION }] },
        ...formattedHistory
      ]
    });

    const replyText = response.text || "Mi scuso, ho riscontrato un piccolo imprevisto nell'elaborare la risposta. Come posso aiutarti di persona?";
    return res.json({ reply: replyText });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    // Graceful fallback during API failure
    const lastUserMessage = messages[messages.length - 1]?.content || '';
    return res.json({
      reply: simulateServiceChat(lastUserMessage) + " (Servizio attivo in modalità di riserva locale)",
      simulation: true
    });
  }
});

// local simulation logic for extreme resilience
function simulateServiceChat(input: string): string {
  const query = input.toLowerCase();

  if (query.includes('ciao') || query.includes('buongiorno') || query.includes('salve')) {
    return "Ciao! Sono l'assistente virtuale di FacilissimoWeb. Sono qui per aiutarti a capire come abbattere le barriere digitali della tua attività tramite siti web strategici o automazioni con Zapier, Make e AI. Come ti chiami e che tipo di business gestisci?";
  }
  if (query.includes('prezz') || query.includes('cost') || query.includes('quanto fac')) {
    return "I nostri servizi sono realizzati 'su misura' per ogni singolo professionista o micro-imprenditore. Un sito web WordPress strategico o un sistema di automazione completo varia a seconda della complessità del flusso di lavoro. Ti consiglio di visitare la pagina **Contatti** e inserire i tuoi dettagli nel nostro form per ottenere subito una fantastica stima interattiva!";
  }
  if (query.includes('wordpress') || query.includes('sito') || query.includes('web') || query.includes('svilupp')) {
    return "Ci occupiamo di Sviluppo Web focalizzato sul profitto! Puoi scegliere tra un WordPress Strategico (ottimizzato e sicuro) o soluzioni in Pure Code (React/HTML super leggeri). Dai uno sguardo alla nostra sezione **Servizi** per esplorare come trasformiamo i visitatori in lead profilati prima che escano dal sito.";
  }
  if (query.includes('automat') || query.includes('make') || query.includes('zapier') || query.includes('lead')) {
    return "L'automazione di FacilissimoWeb è progettata per sollevarti dallo stress del copia-incolla ripetitivo. Colleghiamo i tuoi form web, mail, social e database (come Notion o CRM) in modo che i dati viaggino da soli. Puoi vedere il nostro 'Customer Journey Visualizer' alla pagina **Servizi** per scoprire i dettagli!";
  }
  if (query.includes('chi sei') || query.includes('maria') || query.includes('teresa') || query.includes('storia')) {
    return "Maria Teresa è la fondatrice di FacilissimoWeb! Ha unito la sua passione per l'informatica ed il design grafico per dare vita a metodologie rigorose ma empatiche per i micro-imprenditori. Scopri di più sulla sua storia alla pagina **Chi Sono**!";
  }

  return "Capisco perfettamente! L'automazione e il web design sono pilastri cruciali per scalare la tua attività senza dedicare ore alle fatiche ripetitive. Ti invito a dare un'occhiata alla pagina **Servizi** o a scriverci direttamente dalla pagina **Contatti** per pianificare una call strategica gratuita!";
}

// Vite integration
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server FacilissimoWeb running on port ${PORT}`);
  });
}

startServer();
