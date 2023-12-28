import { debug } from 'console';
import exp from 'constants';
import React, { useState, useEffect } from 'react';

function TimeDisplay() {
  const [time, setTime] = useState("fetching...");
  
  useEffect(() => {
    fetch('/api/timeServer')
      .then(response => response.json())
      .then(data => setTime(data.serverTime))
      // .then(serverTime => console.log(serverTime))
  }, []);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}


export default TimeDisplay;