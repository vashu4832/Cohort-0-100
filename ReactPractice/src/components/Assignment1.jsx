import React, { useMemo, useState } from "react";

const words = ["hi", "my", "name", "is", "for", "to", "random", "words"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
  let sentence = "";
  for (let j = 0; j <= words.length; j++) {
    sentence += (words[Math.floor(Math.random() * 9)])
    sentence += " ";
  }
  ALL_WORDS.push(sentence);
}

function Assignment1() {
  const [sentence, setSentence] = useState(ALL_WORDS);
  const [filter, setFilter] = useState("");

  const filteredSentence = useMemo(() => {
    return sentence.filter((x) => x.includes(filter));
  }, [sentence, filter])
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      {filteredSentence.map((words) => (
        <div>{words}</div>
      ))}
    </div>
  );
}

export default Assignment1;
