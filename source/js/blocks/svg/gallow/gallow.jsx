import React from 'react';

export default function Gallow() {
  return (
    <svg className="gallow-area__gallow" width="150" height="150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path stroke="#000" strokeWidth="5" d="M5 150V5m85 0H2" />
      <path stroke="#000" d="M80 5v35" />
      <ellipse rx="5" ry="3" cx="84" cy="43" fill="transparent" stroke="#000" />
    </svg>
  );
}
