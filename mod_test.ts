import * as mod from "./mod.ts";
import { assert, assertEquals, assertInstanceOf } from "./test_deps.ts";

const { test } = Deno;

test({
  name: "module assertions",
  fn() {
    assert(mod !== null);
    assertEquals(typeof mod.format, "function");
    assertEquals(typeof mod.Loxt, "function");
    assertEquals(typeof mod.Reporter, "function");
    assertEquals(typeof mod.salmon, "object");
    assertEquals(typeof mod.default, "object");
    assertInstanceOf(mod.default, mod.Loxt);
    assertInstanceOf(mod.default.reporter, mod.Reporter);
    assertInstanceOf(mod.salmon, mod.Reporter);
  },
});
