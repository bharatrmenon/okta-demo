import { useState } from 'react';

export default function App() {
  const [events, setEvents] = useState([]);

  async function simulateOktaEvent() {
    const res = await fetch('/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventType: 'User Created',
        user: { id: 'demo123', email: 'john@example.com' }
      })
    });
    const data = await res.json();
    setEvents([...events, data.event]);
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 40 }}>
      <h1>Okta Demo App</h1>
      <p>This app receives Okta Workflow webhook calls.</p>
      <button
        onClick={simulateOktaEvent}
        style={{
          background: '#0070f3',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: 6,
          cursor: 'pointer'
        }}
      >
        Simulate Okta Event
      </button>
      <div style={{ marginTop: 20 }}>
        {events.length === 0 ? (
          <p>No events yet.</p>
        ) : (
          events.map((e, i) => (
            <pre key={i}>{JSON.stringify(e, null, 2)}</pre>
          ))
        )}
      </div>
    </div>
  );
}