// One-Line Office Joke Laugh-Off — entry program (Node 22, TypeScript run as-is).
// Writes the single winning line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Gate: UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Pak Agus is one minute late to our 9:30 standup every day and says 'Sorry, traffic.' He lives across the street.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
