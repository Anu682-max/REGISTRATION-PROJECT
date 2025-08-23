import React, { createContext, useState, useContext, useEffect } from "react";

const Burtgel = createContext();

export const useBurtgel = () => useContext(Burtgel);

export const BurtgelProvider = ({ children }) => {
    const [ner, setNer] = useState('');
    const [nuutsUg, setNuutsUg] = useState('');
    const [user, setUser] = useState([]);

useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')) || [];
    const storeNer = localStorage.getItem('ner');
    const storeNuutsUg = localStorage.getItem('nuutsUg');
   
   setUser(storedUser);

    if (storeNer) {
        setNer(storeNer);
    }
    if (storeNuutsUg) {
        setNuutsUg(storeNuutsUg);
    }
}, []);
useEffect(() => {
    localStorage.setItem('ner', ner);
    localStorage.setItem('nuutsUg', nuutsUg);
}, [ner, nuutsUg]);


   
  const garah = () => {
        setNer('');
        setNuutsUg('');
    };


const burtguuleh = (nerText, nuutsText) => {
   const oldson = user.some(u => u.ner === nerText);
    if (oldson) {
     // Custom styled alert for better UX
     const alertDiv = document.createElement('div');
     alertDiv.innerHTML = `
       <div style="
         position: fixed;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         background: linear-gradient(135deg, #ff6b6b, #ee5a24);
         color: white;
         padding: 24px 32px;
         border-radius: 16px;
         box-shadow: 0 10px 30px rgba(0,0,0,0.3);
         z-index: 10000;
         text-align: center;
         font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
         max-width: 400px;
         backdrop-filter: blur(10px);
         border: 1px solid rgba(255,255,255,0.2);
       ">
         <div style="font-size: 2.5rem; margin-bottom: 16px;">⚠️</div>
         <h3 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600;">
           Нэр бүртгэгдсэн байна!
         </h3>
         <p style="margin: 0 0 20px 0; opacity: 0.9; font-size: 16px;">
           Та өөр нэр оруулна уу.
         </p>
         <button onclick="this.parentElement.parentElement.remove()" style="
           background: rgba(255,255,255,0.2);
           border: 1px solid rgba(255,255,255,0.3);
           color: white;
           padding: 10px 20px;
           border-radius: 8px;
           cursor: pointer;
           font-weight: 600;
           transition: all 0.2s ease;
         ">
           Хаах
         </button>
       </div>
     `;
     document.body.appendChild(alertDiv);
     setTimeout(() => alertDiv.remove(), 5000);
     return false;
   }

   const shineUser = { 
    ner: nerText,
    nuutsUg: nuutsText,
    data: new Date().toLocaleString()
}
    setUser([...user, shineUser]);
    localStorage.setItem('user', JSON.stringify([...user, shineUser]));
    
    // Custom success alert
    const successDiv = document.createElement('div');
    successDiv.innerHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #00b894, #00a085);
        color: white;
        padding: 24px 32px;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        max-width: 400px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
      ">
        <div style="font-size: 2.5rem; margin-bottom: 16px;">🎉</div>
        <h3 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600;">
          Амжилттай бүртгэгдлээ!
        </h3>
        <p style="margin: 0 0 20px 0; opacity: 0.9; font-size: 16px;">
          Таны данс амжилттай үүсгэгдлээ.
        </p>
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
        ">
          Хаах
        </button>
      </div>
    `;
    document.body.appendChild(successDiv);
    setTimeout(() => successDiv.remove(), 5000);
    
    return true;
};


    return (
        <Burtgel.Provider value={{ ner, setNer, garah, nuutsUg, setNuutsUg, burtguuleh, user, setUser }}>
            {children}
        </Burtgel.Provider>
    );
};
