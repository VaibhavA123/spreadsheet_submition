import React from 'react';
import Toolbar from './Toolbar';
import Grid from './Grid';
import Cursors from './Cursors';
import '../App.css';
export default function Spreadsheet() {
  return (
<div
      style={{
        backgroundColor: '#FFF', // page background
        minHeight: '100vh',
        padding: '32px 16px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          backgroundColor: '#FFF',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <Toolbar />
        <Grid />
        <Cursors />
      </div>
    </div>
  );
}