import React from "react";
import { BurtgelProvider, useBurtgel } from "./assets/Burtgel";
import NerOruulah from './NerOruulah';

function NerHarah() {
  const { ner, garah, nuutsUg } = useBurtgel();
  if (!ner) return null;

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '15px',
      padding: '35px',
      margin: '32px auto',
      maxWidth: '400px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      color: '#fff',
      textAlign: 'center',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px'
      }}>
        <h2 style={{
          margin: '0 0 16px 0',
          fontSize: '24px',
          fontWeight: '600',
          color: '#fff'
        }}>
          Амжилттай нэвтэрлээ! 🎉
        </h2>
        <div style={{
          background: 'rgba(255,255,255,0.15)',
          borderRadius: '8px',
          padding: '16px',
          margin: '16px 0'
        }}>
          <p style={{
            margin: '0 0 8px 0',
            fontSize: '16px',
            opacity: '0.9'
          }}>
            Таны нэр: <strong>{ner}</strong>
          </p>
          <p style={{
            margin: '0',
            fontSize: '14px',
            opacity: '0.7'
          }}>
            Нууц үг: {"*".repeat(nuutsUg.length)}
          </p>
        </div>
      </div>
      
      <button 
        onClick={garah}
        style={{
          background: 'rgba(255,255,255,0.2)',
          color: '#fff',
          border: '2px solid rgba(255,255,255,0.3)',
          borderRadius: '12px',
          padding: '12px 24px',
          fontSize: '16px',
          cursor: 'pointer',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
          width: '100%'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.3)';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.2)';
          e.target.style.transform = 'translateY(0px)';
          e.target.style.boxShadow = 'none';
        }}
      >
        Гарах 🚪
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
      backgroundSize: '400% 400%',
      animation: 'gradient 15s ease infinite',
      padding: '20px 0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <BurtgelProvider>
        <div style={{
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            margin: '32px 0',
            letterSpacing: '-1px'
          }}>
            Бүртгэлийн Систем 🌟
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.9)',
            margin: '0',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
          }}>
            Шинэ данс үүсгэх эсвэл нэвтрэх
          </p>
        </div>
        <NerOruulah />
        <NerHarah />
      </BurtgelProvider>
      
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          * {
            box-sizing: border-box;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
}

       