import React from "react";

function formatDate(dateString) {
  const d = new Date(dateString);
  return `${d.toLocaleDateString()} • ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}

function NoteList({ notes }) {
  notes = notes || [];
  return (
    <div style={{ padding: "28px 36px", flex: 1, overflowY: "auto" }}>
      {notes.length === 0 ? (
        <div style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "32px",
          boxShadow: "0 2px 12px #ddd",
          color: "#555",
          textAlign: "center"
        }}>
          No notes yet!
        </div>
      ) : (
        notes.map((note, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              borderRadius: "12px",
              marginBottom: "22px",
              padding: "20px 24px",
              boxShadow: "0 2px 8px #eee",
              position: "relative"
            }}
          >
            <div style={{ marginBottom: "12px", color: "#333", fontSize: "1.05rem" }}>
              {note.text}
            </div>
            <div style={{
              color: "#888",
              fontSize: "0.9rem",
              fontWeight: "500",
              position: "absolute",
              bottom: "12px",
              right: "20px"
            }}>
              {formatDate(note.date)}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default NoteList;
