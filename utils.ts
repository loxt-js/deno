/** Replaces the placeholder in the string with the provided message.
 * @param reporter
 * @param message
 * @returns The formatted string
 */
export const format = (reporter: string, message: unknown): string => {
	return reporter.replace(/\$message|\$name/g, `${message}`);
};
