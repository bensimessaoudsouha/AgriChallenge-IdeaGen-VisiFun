import React from "react";
import { useNavigate } from "react-router-dom";

export default function MapPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>خريطة الحديقة</h2>
      <p>هنا ستظهر خريطة الحديقة مع الأشجار.</p>
      <button onClick={() => navigate("/tree/1")}>اذهب إلى شجرة</button>
    </div>
  );
}