import React from "react";

const Jocks = ({ setup, punchline }) => {
  return (
    
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "15px",
        backgroundColor: "#fff8dc",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      
      <p style={{ fontWeight: "600", fontSize: "16px", marginBottom: "10px" }}>
        {setup}
      </p>
      <p style={{ fontSize: "15px", color: "#555" }}>{punchline}</p>
    </div>
  );
};

export default Jocks;
