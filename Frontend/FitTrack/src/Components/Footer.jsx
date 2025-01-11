import React from "react";

function Footer() {
  let date = new Date().getFullYear();
  return (
    <footer
      style={{
        backgroundColor: "black",
        color: "rgb(127, 246, 114)",
        padding: "6px",
        fontSize: "0.9rem",
      }}
    >
      <p style={{ fontFamily: "Orbitron" }}>© {date} FitTrack</p>
    </footer>
  );
}

export default Footer;
