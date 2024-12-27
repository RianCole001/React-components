import React from 'react';

function ShootButton() {
    // Function to handle the button click
    function handleShoot() {
        alert('You pressed the Shoot button!');
    }

    return (
        <div >
            <button 
                onClick={handleShoot} 
                className="btn btn-primary"
            >
                Shoot
            </button>
        </div>
    );
}

export default ShootButton;
