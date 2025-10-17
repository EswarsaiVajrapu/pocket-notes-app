import React, { useState } from "react";

function GroupModal({ show, onClose, onCreate, colors }) {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  if (!show) return null;

  const handleCreate = () => {
    if (groupName.trim() === "") return;
    onCreate({ name: groupName, color: selectedColor });
    setGroupName("");
    setSelectedColor(colors[0]);
    onClose();
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.18)", zIndex: 999, display: "flex",
      justifyContent: "center", alignItems: "center",
    }}>
      <div style={{
        width: 400, background: "#fff", borderRadius: 16,
        padding: "32px", boxShadow: "0 2px 24px #bbb", position: "relative"
      }}>
        <h3>Create New group</h3>
        <label>Group Name</label>
        <input
          type="text"
          value={groupName}
          placeholder="Enter group name"
          onChange={e => setGroupName(e.target.value)}
          style={{
            width: "100%", marginBottom: 24, padding: "10px 12px",
            borderRadius: 6, border: "1px solid #ccc"
          }}
        />
        <label>Choose colour</label>
        <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          {colors.map(color => (
            <span
              key={color}
              onClick={() => setSelectedColor(color)}
              style={{
                width: 32, height: 32, borderRadius: "50%",
                background: color,
                border: color === selectedColor ? "2px solid #333" : "2px solid #eee",
                cursor: "pointer"
              }}
            />
          ))}
        </div>
        <button
          onClick={handleCreate}
          style={{
            background: "#4169e1", color: "#fff", border: "none",
            borderRadius: 5, padding: "8px 24px", fontWeight: 600
          }}
        >Create</button>
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 12, right: 16, background: "none",
            border: "none", fontSize: "1.2rem", cursor: "pointer"
          }}>×</button>
      </div>
    </div>
  );
}

export default GroupModal;
