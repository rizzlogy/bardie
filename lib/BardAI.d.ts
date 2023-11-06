export = BardAI;

/**
 * @typedef {BardAI} BardAI
 * @example import BardAI from "bardAI";
 */
declare class BardAI {
  /**
   * The Question You Want to Ask Artificial Intelligence.
   * @param {string} ask - The question you want to ask AI.
   * @example client.question("How are you?");
   * @returns {Promise<string>} The response from the AI.
   */
  question(ask: string): Promise<string>;

  /**
   * The Status You want to get from bard.rizzy.eu.org.
   * @example client.status()
   * @returns {Promise<string>} The status from bard.rizzy.eu.org.
   */
  status(): Promise<string>;
}

declare namespace BardAI {}