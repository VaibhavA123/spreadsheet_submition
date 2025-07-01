import React from 'react';

const cursors = [
  { name: 'Abhishek Yadav', color: 'bg-green-500', x: 700, y: 20 },
  { name: 'TANYA KUMARI', color: 'bg-purple-500', x: 740, y: 160 },
  { name: 'RITU RAJ SINGH', color: 'bg-pink-500', x: 840, y: 200 },
  { name: 'Karan', color: 'bg-purple-400', x: 720, y: 320 },
];

const Cursors = () => (
  <>
    {cursors.map((c, idx) => (
      <div
        key={idx}
        className={`absolute px-2 py-1 text-white text-xs font-semibold rounded ${c.color}`}
        style={{ top: c.y, left: c.x }}
      >
        {c.name}
      </div>
    ))}
  </>
);

export default Cursors;
