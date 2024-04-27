## useSpeechText API

This package utilizes the browser API for text dictation. The `useSpeechText` hook provides a convenient interface for integrating speech recognition functionality into your React application.

### Installation

```javascript
npm i grifon23/react-speech-text --dev
```

### Usage

To use the `useSpeechText` hook, import it as follows:

```javascript
import { useSpeechText } from "your-package-name";

const {
  text, // string - text content created from your speech
  startListening, // () => void - function to start speech recognition
  stopListening, // () => void - function to stop speech recognition
  isListening, // boolean - indicates if speech recognition is active
  hasRecognitionSupport, // boolean - indicates if speech recognition is supported by the browser
} = useSpeechText();
```

API

- text: string: Represents the text content created from your speech input.
- startListening: () => void: A function to initiate speech recognition. When called, it activates the microphone and begins listening for speech input.
- stopListening: () => void: A function to stop speech recognition. When called, it stops listening for speech input and finalizes the transcription.
- isListening: boolean: Indicates whether speech recognition is currently active (true) or inactive (false).
- hasRecognitionSupport: boolean: Indicates whether the browser supports speech recognition. If true, the browser supports speech recognition; otherwise, it's not supported.

### Example

Here's a basic example demonstrating how to use the useSpeechText hook:

```javascript
import React from "react";
import { useSpeechText } from "your-package-name";

const SpeechRecognitionComponent = () => {
  const {
    text,
    startListening,
    stopListening,
    isListening,
    hasRecognitionSupport,
  } = useSpeechText();

  return (
    <div>
      <button
        onClick={startListening}
        disabled={!hasRecognitionSupport || isListening}
      >
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!isListening}>
        Stop Listening
      </button>
      <p>Speech recognition is {isListening ? "active" : "inactive"}.</p>
      <p>Recognized text: {text}</p>
    </div>
  );
};

export default SpeechRecognitionComponent;
```
