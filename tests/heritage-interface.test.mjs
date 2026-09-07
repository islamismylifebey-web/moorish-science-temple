import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("real Circle Seven is used as the shared site identity", async () => {
  const layout = await read("app/layout.tsx");
  const home = await read("app/page.tsx");
  assert.match(layout, /\/brand\/circle-seven-original\.png/);
  assert.match(layout, /brand-seal/);
  assert.match(home, /\/brand\/circle-seven-original\.png/);
  assert.doesNotMatch(layout, /function Seal[\s\S]*<span>7<\/span>/);
});

test("original Temple photography is integrated into the interface", async () => {
  const home = await read("app/page.tsx");
  const routes = await read("app\/[slug]\/page.tsx");
  assert.match(home, /Mask-group-2024-05-17T143815\.529\.png/);
  assert.match(home, /heritage-mosaic/);
  assert.match(home, /Original Temple gallery/);
  assert.match(routes, /Noble-Drew-Ali-Image\.webp/);
  assert.match(routes, /heritage-panel/);
});

test("heritage treatment remains accessible and motion-safe", async () => {
  const css = await read("app/styles.css");
  const home = await read("app/page.tsx");
  assert.match(css, /heritage-frame/);
  assert.match(css, /seal-watermark/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(home, /alt="Temple community service and fellowship"/);
});
