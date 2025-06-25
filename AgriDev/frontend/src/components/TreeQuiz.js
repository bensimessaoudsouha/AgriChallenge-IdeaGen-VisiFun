import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function TreeQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h2>Quiz for Tree #{id}</h2>
      <p>هنا ستظهر أسئلة الشجرة المختارة.</p>
      <button onClick={() => navigate("/map")}>عودة للخريطة</button>
    </div>
  );
}