// Copyright 2023 the loxt authors. All rights reserved. MIT license.

/**
 * Replaces the placeholder in the string with the provided message.
 * @param reporter
 * @param message
 * @returns The formatted string
 * @see {@link https://deno.land/x/loxt/utils.ts?s=format}
 */
export function format(reporter: string, message: unknown): string {
	return reporter.replace(/\$[0-9]/, `${message}`);
}
