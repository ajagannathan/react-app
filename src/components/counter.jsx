import React, { Component } from "react";

class Counter extends Component {
    //state is a special property is React applications
    //that contains any data the component needs
    state = {
        count: 1,
    };
    render() {
        // 1. This is a jsx expression that Babel compiles to a call to React.createElement()
        //    Although we dont explicitly call React.createElement we nee to import React
        //    so that it can be called behind the scenes.
        // 2. When creating multiple components (for eg. h1, button) Babel doesnt know how to
        //    compile to a react element. One way is to wrap it in a <div>
        return (
            //This div gets written into <div id='root'></div> of public/index.html
            //The div here does not do anything and is unnecessary. In that case we can use React.Fragment
            //     <div>
            //     <h1>Hello React</h1>
            //     <button>Increment</button>
            //   </div>
            //We can also embed expressions that can change dynamically as shown below within <span></span>
            <React.Fragment>
                <h1>Hello React</h1>
                <span className={this.getClassType()}>
                    {this.validateCount()}
                </span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }
    getClassType() {
        let className = "badge m-2 badge-";
        className += this.state.count === 0 ? "danger" : "success";
        return className;
    }

    validateCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
//export keyword makes the class public
//default exports does not require {} when importing
export default Counter;
