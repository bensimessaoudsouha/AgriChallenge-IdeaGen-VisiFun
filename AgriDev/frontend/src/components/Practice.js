import React from "react";
import { useNavigate } from "react-router-dom";

export default function Practice() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>هل تريد قضاء وقت ممتع؟</h2>
      <p>هيا نمارس ما تعلمته ونستمتع في نفس الوقت!</p>
      <button onClick={() => navigate("/tree/2")}>اختر على الخريطة</button>
      <button onClick={() => navigate("/map")}>العودة إلى الخريطة</button>
    </div>
  );
}