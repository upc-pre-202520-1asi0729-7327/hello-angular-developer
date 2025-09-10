/**
 * Developer domain model
 *
 * @description
 * This class represents a developer with a first name and last name. It provides a method to get the full name of the developer.
 * @class Developer
 * @property {string} firstName - The first name of the developer
 * @property {string} lastName - The last name of the developer
 * @method fullName - Returns the full name of the developer
 */
export class Developer {
  private readonly _firstName: string;
  private readonly _lastName: string;

  /**
   * Creates an instance of Developer.
   * @param {string} firstName - The first name of the developer
   * @param {string} lastName - The last name of the developer
   */
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  /**
   * Returns the full name of the developer
   * @returns {string} The full name of the developer
   */
  get fullName(): string {
    return `${this._firstName} ${this._lastName}`.trim();
  }

  /**
   * Getter for firstName
   * @returns {string} The first name of the developer
   */
  get firstName(): string {
    return this._firstName;
  }

  /**
   * Getter for lastName
   * @returns {string} The last name of the developer
   */
  get lastName(): string {
    return this._lastName;
  }
}
