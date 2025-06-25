import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>VISIFUN</h1>
      <p>مرحبًا بك في الحامة! أنا سعيد باللعب معك. أنا صديقك الشجرة، هل أنت مستعد للعب؟</p>
      <button onClick={() => navigate("/map")}>ابدأ الآن</button>
    </div>
  );
}