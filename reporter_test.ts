import { Reporter } from "./reporter.ts";
import { assertEquals } from "./test_deps.ts";

const { test } = Deno;

test({
  name: "reporter assertions",
  fn() {
    const reporter = new Reporter({
      info: "info: $0",
      success: "success: $0",
      warn: "warning: $0",
      error: {
        name: "$0",
        message: "$0",
      },
      ready: "ready $0",
      start: "start $0",
    });

    assertEquals(reporter.info, "info: $0");
    assertEquals(reporter.success, "success: $0");
    assertEquals(reporter.warn, "warning: $0");
    assertEquals(reporter.error, { name: "$0", message: "$0" });
    assertEquals(reporter.ready, "ready $0");
    assertEquals(reporter.start, "start $0");
  },
});
