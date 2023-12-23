export = Bardie;

interface questionOptions {
  ask: string;
  image?: string;
}

interface AIResponse {
  content: string;
  status: boolean;
  creator: string;
}

declare class Bardie {
  constructor();

  /**
   * Ask a question to the artificial intelligence.
   * @param {questionOptions} options - The options for the question.
   * @returns {Promise<AIResponse>} The response from the AI.
   * @throws {Error} If the question is not specified or the image URL is invalid.
   */
  question(options: questionOptions): Promise<AIResponse>;
}

declare namespace Bardie {}
