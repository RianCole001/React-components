import React from 'react';

function Greetings(props) {
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Hello, {props.name}!</h1>
            <p>Welcome to React Props learning.</p>
            
        </div>
    );
}

export default Greetings;
