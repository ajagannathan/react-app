import React, { Component } from "react";

class Counter extends Component {
    //state is a special property is React applications
    //that contains any data the component needs
    state = {
        count: 1,
        tagList: ["tag1", "tag2", "tag3"],
        //tagList: [],
    };
    rendertags() {
        if (this.state.tagList.length === 0) return <p>No tags</p>;
        return this.state.tagList.map((tag) => <li key={tag}>{tag}</li>);
    }
    constructor() {
        super();
        //Using the bind function this always references the current object
        this.handleIncrementOnClickEvent = this.handleIncrementOnClickEvent.bind(
            this
        );
    }
    handleIncrementOnClickEvent() {
        console.log("Increment clicked");
        //Since this function id a standalone function object and not an Counter object method
        //this operator is undefined and thus this line throws error.
        //One way to solve it is by binding the function to this object in the class constructor
        console.log(this.state.count);
    }
    //Another way to solve the this binding issue is by using arrow functions
    handleIncrementOnClickEventArrow = () => {
        console.log(`Arrow click ${this.state.count}`);
    };

    render() {
        // 1. This is a jsx expression that Babel compiles to a call to React.createElement()
        //    Although we dont explicitly call React.createElement we nee to import React
        //    so that it can be called behind the scenes.
        // 2. When creating multiple components (for eg. h1, button) Babel doesnt know how to
        //    compile to a react element. One way is to wrap it in a <div>
        return (
            //1. This div gets written into <div id='root'></div> of public/index.html
            //2. The div here does not do anything and is unnecessary. In that case we can use React.Fragment
            //     <div>
            //     <h1>Hello React</h1>
            //     <button>Increment</button>
            //   </div>
            //3. We can also embed expressions that can change dynamically as shown below within <span></span>
            //4. When adding a list, key={} attribute is given for React to identify each item in the list
            //   So that when the state of the element changes in virtual DOM it knows where to update in actual DOM
            <React.Fragment>
                <h1>Hello React</h1>
                <span className={this.getClassType()}>
                    {this.validateCount()}
                </span>
                <button
                    onClick={this.handleIncrementOnClickEventArrow} //We pass reference to the function and dont call
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <ul>
                    {
                        /* {this.state.tagList.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))} */ this.rendertags()
                    }
                </ul>
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
