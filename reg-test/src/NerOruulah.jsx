import React from "react";
import { useBurtgel } from "./assets/Burtgel";

export default function NerOruulah() {
  const { setNuutsUg, setNer, burtguuleh, user } = useBurtgel();
  const [nerText, setNerText] = React.useState('');
  const [nuutsText, setNuutsText] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

const nevtreh = async () => {
  setIsLoading(true);
  
  // Simulate loading effect
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const olduser = user.find((u) => u.ner === nerText && u.nuutsUg === nuutsText);
  if (!olduser) {
    alert('❌ Нэр эсвэл нууц үг буруу байна.');
    setIsLoading(false);
    return;
  }

  setNer(olduser.ner);
  setNuutsUg(olduser.nuutsUg);
  alert('✅ Амжилттай нэвтэрлээ!');
  setIsLoading(false);
};

const handleBurtguuleh = async () => {
  setIsLoading(true);
  
  // Simulate loading effect
  await new Promise(resolve => setTimeout(resolve, 800));
  
  burtguuleh(nerText, nuutsText);
  setIsLoading(false);
};

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      padding: '40px',
      maxWidth: '420px',
      margin: '0 auto',
      border: '1px solid rgba(255,255,255,0.3)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '100px',
        height: '100px',
        background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
        borderRadius: '50%',
        opacity: '0.1'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        left: '-30px',
        width: '80px',
        height: '80px',
        background: 'linear-gradient(45deg, #48cae4, #0096c7)',
        borderRadius: '50%',
        opacity: '0.1'
      }}></div>
      
      <div style={{
        textAlign: 'center',
        marginBottom: '32px'
      }}>
        <div style={{
          fontSize: '3rem',
          marginBottom: '16px'
        }}>🔐</div>
        <h2 style={{
          margin: '0 0 8px 0', 
          color: '#2c3e50',
          fontSize: '28px',
          fontWeight: '700',
          letterSpacing: '-0.5px'
        }}>
          Тавтай морилно уу
        </h2>
        <p style={{
          margin: '0',
          color: '#7f8c8d',
          fontSize: '16px',
          fontWeight: '400'
        }}>
          Нэвтрэх эсвэл шинэ данс үүсгэнэ үү
        </p>
      </div>

      <div style={{width: '100%', marginBottom: '24px'}}>
        <div style={{
          position: 'relative',
          marginBottom: '20px'
        }}>
          <span style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '20px',
            color: '#7f8c8d'
          }}>👤</span>
          <input
            type="text"
            value={nerText}
            onChange={(event) => setNerText(event.target.value)}
            placeholder="Хэрэглэгчийн нэр"
            style={{
              width: '100%',
              padding: '16px 16px 16px 50px',
              border: '2px solid #e9ecef',
              borderRadius: '12px',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              outline: 'none',
              background: '#fff'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#667eea';
              e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e9ecef';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <div style={{
          position: 'relative',
          marginBottom: '32px'
        }}>
          <span style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '20px',
            color: '#7f8c8d'
          }}>🔒</span>
          <input
            type="password"
            value={nuutsText}
            onChange={(event) => setNuutsText(event.target.value)}
            placeholder="Нууц үг"
            style={{
              width: '100%',
              padding: '16px 16px 16px 50px',
              border: '2px solid #e9ecef',
              borderRadius: '12px',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              outline: 'none',
              background: '#fff'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#667eea';
              e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e9ecef';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
      </div>

      <div style={{
        display: 'flex', 
        flexDirection: 'column',
        gap: '12px', 
        width: '100%'
      }}>
        <button
          onClick={nevtreh}
          disabled={isLoading || !nerText || !nuutsText}
          style={{
            background: isLoading ? '#95a5a6' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            padding: '16px 24px',
            fontSize: '16px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            if (!isLoading && nerText && nuutsText) {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0px)';
            e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
          }}
        >
          {isLoading ? '⏳ Уншиж байна...' : '🚀 Нэвтрэх'}
        </button>

        <button
          onClick={handleBurtguuleh}
          disabled={isLoading || !nerText || !nuutsText}
          style={{
            background: isLoading ? '#ecf0f1' : '#fff',
            color: isLoading ? '#95a5a6' : '#667eea',
            border: `2px solid ${isLoading ? '#bdc3c7' : '#667eea'}`,
            borderRadius: '12px',
            padding: '16px 24px',
            fontSize: '16px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            if (!isLoading && nerText && nuutsText) {
              e.target.style.background = '#667eea';
              e.target.style.color = '#fff';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.3)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.target.style.background = '#fff';
              e.target.style.color = '#667eea';
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = 'none';
            }
          }}
        >
          {isLoading ? '⏳ Бүртгэж байна...' : '✨ Бүртгүүлэх'}
        </button>
      </div>

      <div style={{
        marginTop: '24px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#95a5a6'
      }}>
        <p style={{margin: '0'}}>
          🔒 Таны мэдээлэл найдвартай хадгалагдана
        </p>
      </div>
    </div>
  );
}
