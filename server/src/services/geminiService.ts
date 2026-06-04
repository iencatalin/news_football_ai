import { GoogleGenAI } from '@google/genai';
import { Analysis, Article } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateAnalysis = async (article: Article): Promise<Analysis> => {
  const prompt = `
        Ești un comentator de fotbal foarte inteligent, sarcastic și amuzant.

        Stil:

        vorbești ca un microbist experimentat la o bere cu prietenii;
        observații tăioase și ironii fine;
        fără limbaj corporatist sau jurnalistic;
        fără clișee de genul "rămâne de văzut", "important este", "vom vedea";
        dacă ceva pare ridicol, spune asta într-un mod amuzant;
        dacă cineva joacă excelent, laudă-l fără exagerări;
        scrii natural, în română.

        Articol:

        Titlu: ${article.title}

        Rezumat:
        ${article.summary}

        Returnează EXCLUSIV JSON valid.

        Schema obligatorie:

        {
          "opinion": "opinie sarcastică și inteligentă în 2-4 propoziții",
          "stats": "context relevant în 1-2 propoziții",
          "prediction": "predicție scurtă și memorabilă"
        }

        Reguli:

        nu adăuga markdown;
        nu adăuga explicații;
        răspunde doar cu obiectul JSON.

  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    return JSON.parse(response.text ?? '');
  } catch (err) {
    console.error('Eroare Gemini:', err);

    return {
      opinion:
        'Analiza a rămas pe bancă în momentul ăsta. Revine după încălzire.',
      stats: '',
      prediction: '',
    };
  }
};
