import React, { useState } from "react";

export default function HelpForm() {
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div>
      <h2>هل يمكنك مساعدتنا؟</h2>
      <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="اكتب رسالتك هنا..." />
      <button onClick={() => setSent(true)}>إرسال</button>
      {sent && <div>تم الإرسال بنجاح!</div>}
    </div>
  );
}