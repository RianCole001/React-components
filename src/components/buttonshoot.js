import React from 'react';

function ClickAlert() {
  // Define the event handler function
  const handleClick = () => {
    alert('Button was clicked!');
  };

  // Render the button with the onClick event
  return (
    <div>
      <h1>React Button Click Example</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickAlert;
