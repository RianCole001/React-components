import React from 'react';

function Greetings(props) {
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Hello, {props.name}!</h1>
            <p>Welcome to React Props learning.</p>
            <button onClick={shoot}>shoot </button>
        </div>
    );
}

export default Greetings;
