import * as themes from "./themes.ts";
import { assertInstanceOf } from "./test_deps.ts";
import { Reporter } from "./reporter.ts";

const { test } = Deno;

test({
  name: "themes assertions",
  fn() {
    assertInstanceOf(themes.salmon, Reporter);
  },
});
