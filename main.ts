// One Letter: Coffee or Tea (make.fun u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
//
// The entry is exactly one letter: A for coffee, B for tea. RULES frames
// coffee first, and coffee is the livelier standing answer in the
// coffee-against-tea argument, so this entry answers A.
//
// The gate requires /output/entry.txt to be UTF-8 text of exactly 1
// character, so the file holds one byte, "A", with no trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LETTER = "A"; // A = coffee

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Self-check against the gate: the file must be exactly one character,
// nothing else. Fail loudly instead of submitting a bad entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LETTER) {
  throw new Error(
    `entry.txt must hold exactly ${JSON.stringify(LETTER)}, got ${JSON.stringify(written)}`,
  );
}
