import React, { Component } from "react";

// class NavBar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">
//                         Navbar{" "}
//                         <span className="badge badge-pill badge-secondary">
//                             {this.props.totalNonEmptyCounters}
//                         </span>
//                     </a>
//                 </div>
//             </nav>
//         );
//     }
// }

//When a Component has only one function render() in its class
//It can be represented as a function. We call this
// Stateless Function Component
// This is just a another approach. The only thing to keep in mind
// is that we cannot use this.props instead we need to pass it
// as a function argument at runtime

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge badge-pill badge-secondary">
                        {props.totalNonEmptyCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
