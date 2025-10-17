import React from "react";

function GroupList({ groups, selectedGroup, onSelect }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {groups.map(group => (
        <li
          key={group.name}
          onClick={() => onSelect(group)}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
            background: selectedGroup.name === group.name ? "#e5edf5" : "none",
            borderRadius: "16px",
            cursor: "pointer"
          }}
        >
          <span style={{
            width: "40px",
            height: "40px",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            background: group.color,
            color: "#fff",
            borderRadius: "50%",
            marginRight: "1rem",
            fontWeight: "bold",
            fontSize: "1.1rem"
          }}>
            {group.name.split(' ').map(w => w[0]).join('').toUpperCase()}
          </span>
          {group.name}
        </li>
      ))}
    </ul>
  );
}

export default GroupList;
