// Copyright 2023 the loxt authors. All rights reserved. MIT license.

/** Replaces the placeholder in the string with the provided message and returns the string. */
export function format(reporter: string, message: unknown): string {
  return reporter.replace(/\$[0-9]/, `${message}`);
}
