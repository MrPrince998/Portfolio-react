import { useState, useEffect } from "react";

const Typewriter = ({ texts, speed = 100, loop = false }) => {
  const [displayText, setDisplayText] = useState("|");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!deleting && charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1) + texts[textIndex][charIndex] + "|");
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (!deleting && charIndex === texts[textIndex].length) {
      setTimeout(() => setDeleting(true), 1000);
    }

    if (deleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -2) + "|");
        setCharIndex(charIndex - 1);
      }, speed / 2);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [charIndex, textIndex, texts, speed, deleting]);

  return <h1 className="text-5xl font-bold m-4">{displayText}</h1>;
};

export default Typewriter;
