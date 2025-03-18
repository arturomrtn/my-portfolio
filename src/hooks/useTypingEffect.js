import { useState, useEffect } from "react";

const useTypingEffect = (texts, speed = 100, delay = 2000) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    const isTextComplete = charIndex === currentText.length;
    const isTextEmpty = charIndex === 0 && isDeleting;

    const handleTyping = () => {
      if (isTextEmpty) {
        setIsDeleting(false);          
        setIndex((prev) => (prev + 1) % texts.length);
        setCharIndex(0);
        return;
      }

      setText(currentText.slice(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

      if (isTextComplete && !isDeleting) {
        setTimeout(() => setIsDeleting(true), delay);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, texts, speed, delay]);

  return text;
};

export default useTypingEffect;
