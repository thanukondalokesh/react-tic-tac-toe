import React from "react";

function Profile({ name, role, email }) {
  return (
    <>
    <h2>Props & State</h2>
    <div style={{ border: "1px solid #ccc", padding: "12px", margin: "10px" }}>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Email: {email}</p>
    </div>
    </>
  );
}

export default Profile;
