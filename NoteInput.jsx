import React, { useState } from "react";

function NoteInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reload AND block duplicate calls
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#e6eefc",
        borderRadius: "12px",
        padding: "18px 22px",
        margin: "16px 32px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 2px 8px #e7e7e7",
      }}
    >
      <input
        type="text"
        value={text}
        placeholder="Enter your text here..."
        onChange={e => setText(e.target.value)}
        style={{
          flex: 1,
          border: "none",
          background: "none",
          fontSize: "1rem",
          outline: "none",
          padding: "8px",
        }}
      />
      <button
        type="submit"
        style={{
          marginLeft: "10px",
          background: "#4169e1",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "8px 14px",
          cursor: "pointer",
          fontSize: "1.3rem",
          display: "flex",
          alignItems: "center"
        }}
        aria-label="Send"
      >
        <span style={{ display: "inline-block", transform: "rotate(-25deg)" }}>
          ➤
        </span>
      </button>
    </form>
  );
}

export default NoteInput;
