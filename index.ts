// Root entry shim — V2's local plugin-dir resolution looks for index.* at the
// package root (src/index.ts stays the real implementation; dist/ is the
// published bundle for npm consumers).
export { default } from "./src/index.ts"
export * from "./src/index.ts"
