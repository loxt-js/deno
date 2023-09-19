// Copyright 2023 the loxt authors. All rights reserved. MIT license.

import type { Reporter } from "./reporter.ts";
import { salmon } from "./themes.ts";
import { format } from "./utils.ts";

/** Utility class to use the logger (Reporter). */
export class Loxt {
  reporter: Reporter;

  constructor(reporter?: Reporter) {
    this.info = this.info.bind(this);
    this.success = this.success.bind(this);
    this.warn = this.warn.bind(this);
    this.error = this.error.bind(this);
    this.ready = this.ready.bind(this);
    this.start = this.start.bind(this);
    this.clone = this.clone.bind(this);

    this.reporter = reporter ?? salmon;
  }

  /** Log with the info reporter. */
  info(message: unknown): void {
    console.log(format(this.reporter.info, message));
  }

  /** Log with the success reporter. */
  success(message: unknown): void {
    console.log(format(this.reporter.success, message));
  }

  /** Log with the warning reporter. */
  warn(message: unknown): void {
    console.warn(format(this.reporter.warn, message));
  }

  /** Log with the error reporter. */
  error(error: unknown): void {
    const { name, message } = this.reporter.error;

    if (!(error instanceof Error)) {
      console.error(`${format(name, "error")}: ${format(message, error)}`);
      return;
    }

    console.error(
      error.stack
        ?.replace(error.name, format(name, error.constructor.name))
        ?.replace(error.message, format(message, error.message)),
    );
  }

  /** Log with the ready reporter. */
  ready(message: unknown): void {
    console.log(format(this.reporter.ready, message));
  }

  /** Log with the start reporter. */
  start(message: unknown): void {
    console.log(format(this.reporter.start, message));
  }

  /** Generates a new loxt instance with the same settings as this instance and returns it. */
  clone(): Loxt {
    return new Loxt(this.reporter);
  }
}
