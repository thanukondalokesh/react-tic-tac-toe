import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import TicTacToe from "./components/TicTacToe";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Features from "./components/Features";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="app">
      {/* ================= NAVIGATION ================= */}
      <nav className="navbar">
        <a href="/">🏠 Home</a>
        <a href="/game">🎮 Game</a>
        <a href="/props">📘 Props & State</a>
        <a href="/events">📗 Events & Rendering</a>
        <a href="/register">📝 Forms</a>
      </nav>


      {/* ================= ROUTES ================= */}
      <Routes>
        <Route
          path="/"
          element={<h2>Welcome to React Tic Tac Toe Application</h2>}
        />

        <Route path="/game" element={<TicTacToe />} />

        <Route
          path="/props"
          element={
            <>
              <h2> Props & State</h2>
              <Profile
                name="Lokesh Thanukonda"
                role="React Developer"
                email="lokesh@example.com"
              />
              <Counter />
            </>
          }
        />

        <Route
          path="/events"
          element={
            <>
              <h2> Events & Conditional Rendering</h2>
              <Features />
            </>
          }
        />

        <Route
          path="/register"
          element={
            <>
              <h2> Forms – Controlled Components</h2>
              <RegisterForm />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
