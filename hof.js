const words = ["Chocolate", "Blueberry", "Devil", "Regular"];

const wordLengths = new Map();
words.forEach((word) => wordLengths.set(word, word.length));

for (const [word, length] of wordLengths) {
  console.log(`${word}: ${length}`);
}

