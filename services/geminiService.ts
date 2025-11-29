import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateChatResponse = async (
  history: { role: string; text: string }[],
  lastMessage: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the conversation history for context
    const systemInstruction = `
      あなたは「三原 健人（ミハラ ケント）」という、プロフェッショナルな動画編集者・エンジニアです。
      以下のプロフィールに基づいて、訪問者からの質問に、丁寧かつ知的に答えてください。
      
      【プロフィール】
      - 名前: 三原 健人 (Mihara Kento)
      - 職業: 動画編集者 / Web・アプリ開発者 / 戦略的マインドスポーツプレイヤー
      - 実績(動画): 
        - 登録者200万人超のYouTubeチャンネルの編集を担当。
        - 担当動画で200万再生達成。
        - サムネイル制作実績200枚以上。
        - 使用ソフト: Adobe Premiere Pro (※Final Cutは使用していません)
      - 実績(競技/統計スキル):
        - マインドスポーツのプロ競技リーグにて、2021年最優秀順位率賞を受賞。
        - 記録: 2.08（歴代最高）。
        - 統計が必要な競技で培った「状況判断力」と「勝負強さ」をビジネスに活かしています。
      - 実績(ビジネス/開発):
        - 自治体提案実績: 「Matsue Sunset AI」(https://matsuesunsetai.com/) の企画・開発・提案。
        - 制作実績サイト: https://miharads.com/
      - 資格: Java Silver, AWS SAA。
      
      【提供サービス・料金】
      - 動画編集: 3万円〜
      - デザイン制作: 5,000円〜
      - Webサイト制作: 15万円〜（運用保守 月1万円〜）
        - ※レスポンシブ対応、SEO対策込み。
        - ※予算に応じてファイアーウォールの導入も可能です。
      - Webシステム・業務ツール開発: 応相談
        - ※React等の最新技術を用い、アプリのような使い心地のWebサイトを構築します。

      【SNS・リンク】
      - X (Twitter): https://x.com/miharaeditor
      - Note: https://note.com/kavu
      
      【連絡先】
      - メール: sakazuki080@gmail.com
      - 電話: 080-1642-0588

      回答は短潔に、かつ親しみやすく行ってください。営業や依頼に関する質問には、上記の料金目安を提示しつつ、メールまたは電話での連絡を促してください。
      「麻雀」という単語は極力使わず、「戦略的マインドスポーツ」「競技」といった言葉で表現してください。
    `;

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({ message: lastMessage });
    return result.text || "申し訳ありません。うまく回答を生成できませんでした。";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "現在AIサービスに接続できません。後ほど再度お試しください。";
  }
};