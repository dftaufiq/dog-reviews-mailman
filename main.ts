// The Dog Reviews the Mailman — make.fun entry.
// Writes one funny one-line review a dog gives the mailman to /output/entry.txt.
// The line was chosen by internal pairwise selection plus a mock-judge trial
// (see the build folder's mock-judge.md): 2-beat structure + reveal in the final
// clause, a named mailman (Dave), a specific number (847), true dog voice.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Dave knocks, I bark, he runs — 847 times, same dance. Today I broke the routine: I wagged my tail. He froze. I have never seen a man so betrayed by kindness.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
