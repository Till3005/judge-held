import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = `The boats are tied for the night,
each nodding at its own rope.
The harbor keeps them the way a hand keeps a coin:
loosely, enough to rise and fall.
The water takes the last light and spreads it thin.
Nothing is asked of them until morning.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
