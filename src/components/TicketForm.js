import React, { useState } from "react";
import "../styles.css";

export default function TicketForm({ dispatch }) {
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
    const ticketData = {
      id: new Date().toISOString(),
      title,
      descritpion,
      priority,
    };
    dispatch({ type: "ADD_TICKET", payload: ticketData });
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
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>

        {Object.entries(priorityLabel).map(([key, desc]) => (
          <label key={key} className="priority-label">
            <input
              type="radio"
              value={key}
              checked={priority === key}
              onChange={(e) => setPriority(e.target.value)}
              className="priority-input"
            />
            {desc}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
