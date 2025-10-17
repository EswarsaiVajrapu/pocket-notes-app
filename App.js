import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import GroupModal from './GroupModal';
import NoteList from './NoteList';
import NoteInput from './NoteInput';

const GROUPS_KEY = "pocket_notes_groups";
const COLORS = [
  "#6196ff", "#ffad60", "#25c481", "#f37fc9", "#84b2fa"
];

function loadGroups() {
  try {
    const data = localStorage.getItem(GROUPS_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

function saveGroups(groups) {
  try {
    localStorage.setItem(GROUPS_KEY, JSON.stringify(groups));
  } catch {
    // fail silently
  }
}

function App() {
  const [groups, setGroups] = useState(
    () => loadGroups() || [{ name: "My Notes", color: COLORS[0], notes: [] }]
  );
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    saveGroups(groups);
  }, [groups]);

  const addNote = (text) => {
    setGroups(groups => {
      const updated = [...groups];
      const note = { text, date: new Date().toISOString() };
      updated[selectedGroupIndex].notes = [...updated[selectedGroupIndex].notes, note];
      return updated;
    });
  };

  const addGroup = ({ name, color }) => {
    setGroups([...groups, { name, color, notes: [] }]);
    setSelectedGroupIndex(groups.length);
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: "#f8fafc" }}>
      <Sidebar
        groups={groups}
        selectedGroup={groups[selectedGroupIndex]}
        setSelectedGroup={grp => setSelectedGroupIndex(groups.indexOf(grp))}
        onAddGroup={() => setIsModalOpen(true)}
      />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "#f8fafc" }}>
        <NoteList notes={groups[selectedGroupIndex]?.notes || []} />
        <NoteInput onAdd={addNote} />
      </div>
      <GroupModal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={addGroup}
        colors={COLORS}
      />
    </div>
  );
}

export default App;
