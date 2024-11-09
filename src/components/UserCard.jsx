import React from "react";
import "./UserCard.css";

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <img
        src={user.avatar}
        alt={`${user.name}'s avatar`}
        className="user-avatar"
      />
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
      </div>
    </div>
  );
}
