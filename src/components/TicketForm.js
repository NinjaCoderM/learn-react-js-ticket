import React, { useState } from "react";
import "../styles.css";

export default function TicketForm() {
  const [title, setTitle] = useState("");
  const [descritpion, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLabel = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearFrom = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFrom();
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          value={descritpion}
          className="form-input"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </form>
  );
}
