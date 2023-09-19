import { assertEquals } from "./test_deps.ts";
import * as utils from "./utils.ts";

const { test } = Deno;

test({
  name: "string formatting assertions",
  fn() {
    const formatted = utils.format("Hello, $0!", "World");
    assertEquals(formatted, "Hello, World!");
  },
});
