import React from "react";

export default function TicketItem({ ticket, dispatch }) {
  const { id, title, description, priority } = ticket;

  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[priority]}`}></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        className="button"
        onClick={() => dispatch({ type: "DELETE", payload: { id } })}
      >
        Delete Ticket
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "UPDATE_TICKET", payload: ticket })}
      >
        Update Ticket
      </button>
    </div>
  );
}
