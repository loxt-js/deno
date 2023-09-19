import { Loxt } from "./loxt.ts";
import { assertSpyCall, assertStrictEquals, spy } from "./test_deps.ts";
import { format } from "./utils.ts";

const { test } = Deno;
const loxt = new Loxt();

const HELLO_WORLD = "Hello, World!";

const spyLog = spy(console, "log");
const spyWarn = spy(console, "warn");
const spyError = spy(console, "error");

test({
  name: "loxt info assertions",
  fn() {
    loxt.info(HELLO_WORLD);

    assertSpyCall(spyLog, 0, {
      args: [format(loxt.reporter.info, HELLO_WORLD)],
    });
  },
});

test({
  name: "loxt success assertions",
  fn() {
    loxt.success(HELLO_WORLD);

    assertSpyCall(spyLog, 1, {
      args: [format(loxt.reporter.success, HELLO_WORLD)],
    });
  },
});

test({
  name: "loxt warning assertions",
  fn() {
    loxt.warn(HELLO_WORLD);

    assertSpyCall(spyWarn, 0, {
      args: [format(loxt.reporter.warn, HELLO_WORLD)],
    });
  },
});

test({
  name: "loxt error assertions (any)",
  fn() {
    loxt.error(HELLO_WORLD);

    const { name, message } = loxt.reporter.error;

    assertSpyCall(spyError, 0, {
      args: [
        `${format(name, "error")}: ${format(message, HELLO_WORLD)}`,
      ],
    });
  },
});

test({
  name: "loxt error assertions (error)",
  fn() {
    const error = new Error(HELLO_WORLD);

    loxt.error(error);

    const { name, message } = loxt.reporter.error;

    assertSpyCall(spyError, 1, {
      args: [
        error.stack
          ?.replace(error.name, format(name, error.constructor.name))
          .replace(error.message, format(message, error.message)),
        ,
      ],
    });
  },
});

test({
  name: "loxt ready assertions",
  fn() {
    loxt.ready(HELLO_WORLD);

    assertSpyCall(spyLog, 2, {
      args: [format(loxt.reporter.ready, HELLO_WORLD)],
    });
  },
});

test({
  name: "loxt start assertions",
  fn() {
    loxt.start(HELLO_WORLD);

    assertSpyCall(spyLog, 3, {
      args: [format(loxt.reporter.start, HELLO_WORLD)],
    });
  },
});

test({
  name: "loxt clone assertions",
  fn() {
    const clone = loxt.clone();

    assertStrictEquals(clone.reporter, loxt.reporter);
  },
});
