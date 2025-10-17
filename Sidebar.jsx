import React from 'react';
import GroupList from './GroupList'; // If you're using a GroupList component

function Sidebar({ groups, selectedGroup, setSelectedGroup, onAddGroup }) {
  return (
    <div style={{
      width: "260px",
      background: "#f6f6f6",
      padding: "0 1.5rem",
      position: "relative",
      borderRight: "1px solid #ddd",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      boxSizing: "border-box"
    }}>
      <h2 style={{ margin: "1.5rem 0", fontWeight: 700, fontSize: "1.5rem" }}>Pocket Notes</h2>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <GroupList
          groups={groups}
          selectedGroup={selectedGroup}
          onSelect={setSelectedGroup}
        />
      </div>
      {/* The "+" button for opening the Add Group modal */}
      <button
        onClick={onAddGroup}
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "40px",
          background: "#4169e1",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          fontSize: "2rem",
          cursor: "pointer",
          outline: "none",
          boxShadow: "0 2px 8px #bbb"
        }}
        aria-label="Add Group"
      >
        +
      </button>
    </div>
  );
}

export default Sidebar;
