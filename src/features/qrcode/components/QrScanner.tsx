"use client";

import { BrowserMultiFormatReader, Result } from "@zxing/library";
import { useRef, useState } from "react";

export const QrScanner = () => {
  const [result, setResult] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const codeReader = new BrowserMultiFormatReader();

  const startCam = () => {
    let selectDevice = null;
    
    codeReader.listVideoInputDevices().then((devices) => {
      if (devices.length === 0) {
        return;
      }

      selectDevice = devices[0].deviceId;

      return codeReader.decodeFromVideoDevice(
        selectDevice,
        videoRef.current,
        (result: Result) => {
          if (result) {
            setResult(result.getText());
            codeReader.reset();
          }
        }
      );
    });
  };

  return (
    <div>
      <h1 onClick={startCam}>QrScanner</h1>
      <video ref={videoRef} id="video" width="320" height="240" />
      {result && <p>Resultado: {result}</p>}
    </div>
  );
};
