import React from "react";
import { useBurtgel } from "./assets/Burtgel";

export default function NerOruulah() {
  const { setNuutsUg, setNer } = useBurtgel();
  const [nerText, setNerText] = React.useState('');
  const [nuutsText, setNuutsText] = React.useState('');

  return (
    <div>
      <h1>Нэр оруулах</h1>
      <input
        type="text"
        value={nerText}
        onChange={(event) => setNerText(event.target.value)}
      />
      <br />
      <input
        type="password"
        value={nuutsText}
        onChange={(event) => setNuutsText(event.target.value)}
        placeholder="Нууц үг оруулна уу"
      />

      <button
        onClick={() => {
          setNer(nerText);
          setNuutsUg(nuutsText);
        }}>
            Нэр оруулах
        </button>
    </div>
  );
}
