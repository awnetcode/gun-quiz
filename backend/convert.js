const fs = require("fs");
const pdf = require("pdf-parse");

const dataBuffer = fs.readFileSync("PYTANIA_EGZAMINACYJNE.pdf");

pdf(dataBuffer).then(data => {
  const text = data.text;

  const pattern = /(\d+)\.\s+(.+?)\s*\((?:art|§).+?\)\s+a\.\s+(.+?)\s+b\.\s+(.+?)\s+c\.\s+(.+?)(?=\n\d+\.|\n$)/gs;
  //const pattern = /(\d+)\.\s+(.+?)\s*\((art\..+?)\)\s+a\.\s+(.+?)\s+b\.\s+(.+?)\s+c\.\s+(.+?)(?=\n\d+\.|\n$)/gs;

  const result = [];

  let match;
  while ((match = pattern.exec(text)) !== null) {
    const [, numer, pytanie, hint, a, b, c] = match;
    result.push({
      number: parseInt(numer),
      question: pytanie.trim(),
      hint: hint.trim(),
      answers: {
        a: a.trim(),
        b: b.trim(),
        c: c.trim()
      },
      correctAnswer: ""
    });
  }

  fs.writeFileSync("questionsHints.json", JSON.stringify(result, null, 2), "utf-8");
  console.log("Zapisano plik pytania.json");
});
