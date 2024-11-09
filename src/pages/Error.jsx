import MainNavigation from "../components/MainNavigation";
import React, { useEffect } from "react";
import "./Home.css";

export default function Error() {
  useEffect(() => {
    document.title = "Error";
  }, []);

  return (
    <>
      <MainNavigation />
      <main className="home-container">
        <h1>This page doesn't exist.</h1>
        <p>Maybe you should go back?</p>
      </main>
    </>
  );
}
