import React from "react";

function Header(){

    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/addTFeeDetails">Function Management</a>
                </li>
                
                <li className="nav-item">
                <a className="nav-link" href="/addExpenses">Dining</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/addStuPayment">Resevation</a>
                </li>
               
                
            </ul>
            </div>
        </div>
        </nav>





    )

}

export default Header;