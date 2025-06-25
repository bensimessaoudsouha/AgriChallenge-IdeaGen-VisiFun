import React, { useState } from "react";

export default function PlantSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  // You can add real search logic later
  return (
    <div>
      <h2>ما هي النبتة التي تبحث عنها؟</h2>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="ابحث هنا..." />
      <button onClick={() => setResults([{ name: "شجرة النخيل", desc: "شجرة النخيل الطويلة." }])}>بحث</button>
      <ul>
        {results.map((p, i) => <li key={i}>{p.name}: {p.desc}</li>)}
      </ul>
    </div>
  );
}