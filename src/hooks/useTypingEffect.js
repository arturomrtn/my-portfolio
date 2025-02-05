import { useState, useEffect } from "react";

const useTypingEffect = (texts, speed = 100, delay = 1500) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    const isTextComplete = charIndex === currentText.length;
    const isTextEmpty = charIndex === 0;

    const handleTyping = () => {
      setText(currentText.slice(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

      if (isTextComplete && !isDeleting) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isTextEmpty && isDeleting) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, texts, speed, delay]);

  return text;
};

export default useTypingEffect;

