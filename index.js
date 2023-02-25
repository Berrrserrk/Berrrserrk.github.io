import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
function tick() {
  const element = (
    <div>
      <h1>TIME IN MOSCOW:</h1>
      <h2>{new Date().toLocaleString("en-GB", {timeZone: "Europe/Moscow",hour: '2-digit',
    minute: '2-digit',second: '2-digit'})}.
    </h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);



  

    
    

