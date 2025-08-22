import React from "react";
import { BurtgelProvider, useBurtgel } from "./assets/Burtgel";
import NerOruulah from './NerOruulah';

function NerHarah() {
  const { ner, garah, nuutsUg } = useBurtgel();
  if (!ner) return null;

  return (
    <div>
      <h2>Таны нэр: {ner}</h2>
      <p>Таны нууц үг: {nuutsUg}</p>
      <button onClick={garah}>Гарах</button>
    </div>
  );
}

  

export default function App() {
  return (
    <BurtgelProvider>
      <h1>Нэр оруулах</h1>
      <NerOruulah />
      <NerHarah />
    </BurtgelProvider>
  );
}

       