import { useEffect, useState } from "react";

let recognition: SpeechRecognition;

if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "uk-UA";
}
export const useSpeechRecord = () => {
  const [text, setText] = useState("");
  const [isListening, setListening] = useState<boolean>(false);

  useEffect(() => {
    if (!recognition) return;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      setText(event.results[0][0].transcript);
      recognition.stop();
      setListening(false);
    };
  }, []);

  const startListening = () => {
    setText("");
    setListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setListening(false);
    recognition.stop();
  };
  return {
    text,
    startListening,
    stopListening,
    isListening,
    hasRecognitionSupport: !!recognition,
  };
};
