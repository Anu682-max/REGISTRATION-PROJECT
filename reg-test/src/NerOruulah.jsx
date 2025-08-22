import React from "react";
import { useBurtgel } from "./assets/Burtgel";

export default function NerOruulah() {
  const { setNuutsUg, setNer, burtguuleh, user } = useBurtgel();
  const [nerText, setNerText] = React.useState('');
  const [nuutsText, setNuutsText] = React.useState('');

const nevtreh = () => {
  const olduser = user.find((u) => u.ner === nerText && u.nuutsUg === nuutsText);
  if (!olduser) {
    alert('Нэр эсвэл нууц үг буруу байна.');
    return;
  }

    setNer(olduser.ner);
    setNuutsUg(olduser.nuutsUg);
    alert('Амжилттай нэвтэрлээ.');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      background: '#f7f7fa',
      borderRadius: '12px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      padding: '32px',
      maxWidth: '350px',
      margin: '40px auto'
    }}>
      <h2 style={{marginBottom: 24, color: '#333'}}>Нэвтрэх / Бүртгүүлэх</h2>
      <input
        type="text"
        value={nerText}
        onChange={(event) => setNerText(event.target.value)}
        placeholder="Нэрээ оруулна уу"
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '16px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          fontSize: '16px'
        }}
      />
      <input
        type="password"
        value={nuutsText}
        onChange={(event) => setNuutsText(event.target.value)}
        placeholder="Нууц үг оруулна уу"
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          fontSize: '16px'
        }}
      />
      <div style={{display: 'flex', gap: '12px', width: '100%', justifyContent: 'center'}}>
        <button
          onClick={() => burtguuleh(nerText, nuutsText)}
          style={{
            background: '#4f8cff',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '10px 18px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'background 0.2s',
          }}
        >
          Бүртгүүлэх
        </button>
        <button
          onClick={nevtreh}
          style={{
            background: '#fff',
            color: '#4f8cff',
            border: '1.5px solid #4f8cff',
            borderRadius: '6px',
            padding: '10px 18px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          Нэвтрэх
        </button>
      </div>
    </div>
  );
}
