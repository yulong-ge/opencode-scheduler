import { describe, expect, test } from "bun:test"

import pluginModule, { SchedulerPlugin } from "../src/index"

describe("plugin entrypoint", () => {
  test("uses the V1 server module shape", () => {
    expect(pluginModule).toEqual({ server: SchedulerPlugin })
    expect(typeof pluginModule.server).toBe("function")
  })
})
