import React from 'react';
function footer1(){
    return(
     <footer className="bg-light text-center text-lg-start">
    <div className="container p-4">
        <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">React App</h5>
                
            </div>
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                    <li><a href="/" className="text-dark">Home</a></li>
                    <li><a href="/about" className="text-dark">About</a></li>
                    <li><a href="/contact" className="text-dark">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 React App. All rights reserved.
    </div>
</footer>
);
}
export default footer1;