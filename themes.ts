// Copyright 2023 the loxt authors. All rights reserved. MIT license.

import { Reporter } from "./reporter.ts";
import { blue, bold, green, red, yellow } from "./deps.ts";

/** Loxt default theme. */
export const salmon = new Reporter({
  info: `${blue(bold("info"))}: $0`,
  warn: `${yellow(bold("warning"))}: $0`,
  ready: `${green("ready")} $0`,
  start: `${green("start")} $0`,
  success: `${green(bold("success"))}: $0`,
  error: {
    name: red(bold("$0")),
    message: "$0",
  },
});
