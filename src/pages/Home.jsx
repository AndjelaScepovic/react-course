import React, { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import UserCard from "../components/UserCard";
import "./Home.css";

export default function Home() {
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Home";
  }, []);

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return (
      <div className="home-container">
        <h1>Please log in first</h1>
        <img
          src="https://media.tenor.com/mEZA-PXoTxsAAAAi/pokemon-shrempemon.gif"
          alt="Please log in"
          className="login-gif"
          style={{ maxWidth: "100%", height: "auto", float: "left" }}
        />
      </div>
    );
  }

  return (
    <div className="home-container">
      <div>
        <h1>Hello, {user.name}</h1> {}
        <UserCard user={user} />
        <button className="logout-button" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}
