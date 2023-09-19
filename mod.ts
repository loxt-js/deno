// Copyright 2023 the loxt authors. All rights reserved. MIT license.

/**
 * Loxt is a simple and lightweight console logger with 0 external dependencies.
 *
 * ```ts
 * import loxt from "loxt";
 *
 * loxt.start("Some code...");
 * loxt.ready("Initialization code, whatever...");
 * loxt.info("Loxt is easy to use!");
 * loxt.warn("You can use colors!");
 * loxt.error("Create your own themes!");
 * loxt.success("You can use themes from other people too!");
 * loxt.start("My Amazing App!");
 * ```
 *
 * @module
 */

import { Loxt } from "./loxt.ts";

/** Default instance of loxt. */
export default new Loxt();

export { Loxt };
export { salmon } from "./themes.ts";
export { type LoxtError, type LoxtReporter, Reporter } from "./reporter.ts";
export { format } from "./utils.ts";
