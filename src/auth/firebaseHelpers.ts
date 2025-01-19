import { z } from "zod";

/**
 * Validates an email address.
 *
 * @param {string} email Email address to check for validity.
 * @returns {string} Error message if invalid, or empty string if valid.
 */
export function parseEmail(email: string): string {
  return z
    .string()
    .trim()
    .email("Provided email address isn't valid")
    .parse(email);
}

/**
 * Validates a string.
 *
 * @param {string} str a string
 * @returns {string} the same string
 */
export function parseString(str: string): string {
  return z.string().min(1, "Please enter a password.").parse(str);
}
