import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import TicTacToe from "./components/TicTacToe";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Features from "./components/Features";
import RegisterForm from "./components/RegisterForm";
import TaskManager from "./components/TaskManager";

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
        <a href="/tasks">📋 Task Manager</a>
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
              <Features />
            </>
          }
        />

        <Route
          path="/register"
          element={
            <>
              
              <RegisterForm />
            </>
          }
        />

        {/* ===== Day 9: Mini Project ===== */}
        <Route
          path="/tasks"
          element={
            <>
              
              <TaskManager />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
