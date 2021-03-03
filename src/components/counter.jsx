import React, { Component } from "react";

class Counter extends Component {
    //state is a special property is React applications
    //that contains any data the component needs

    //This is a local state of the react component
    //So when the Parent component(Counters) changes its state
    //the local state of the Counter component does not change
    //because we dont have a single source of truth. The value in
    //this state is not connected to the value in the parent component
    //So we remove this local state and depend on the poroperties
    //of the Counter(child component) set in Counters' (Parent)state
    //The Counter receives data from Counters (Parent) and it is
    //controlled by the parent. Counter raises events which is
    //handled by the Counters Component

    //This state is executed only once when instance
    // of the Counter is created

    // state = {
    //     value: this.props.counter.value,
    //     //value: this.props.value,
    //     tagList: ["tag1", "tag2", "tag3"],
    //     //tagList: [],
    // };

    // rendertags() {
    //     if (this.state.tagList.length === 0) return <p>No tags</p>;
    //     return this.state.tagList.map((tag) => <li key={tag}>{tag}</li>);
    // }

    //if there is a constructor defined, then it should be defined with props as parameter
    //So that the properties could be used to set state {} object
    // constructor(props) {
    //     super(props);
    //     //Using the bind function this always references the current object
    //     this.handleIncrementOnClickEvent = this.handleIncrementOnClickEvent.bind(
    //         this
    //     );
    // }

    // handleIncrementOnClickEvent() {
    //     console.log("Increment clicked");
    //     //Since this function id a standalone function object and not an Counter object method
    //     //this operator is undefined and thus this line throws error.
    //     //One way to solve it is by binding the function to this object in the class constructor
    //     console.log(this.state.value);
    // }

    //Another way to solve the this binding issue is by using arrow functions
    // handleIncrementOnClickEventArrow = (eventArgs) => {
    //     //Updating the state is done by using setState() method inherited from Component class
    //     //This method tells react that we are updating the state and it brings the DOM in sync with virtual DOM
    //     this.setState({ value: this.state.value + 1 });
    //     console.log(
    //         `Arrow click ${this.state.value} event args : ${eventArgs}`
    //     );
    // };

    render() {
        // this.props is javascript object that holds attributes of the counter generated in counters.jsx
        //It can be used to set default values in the state {} object
        //console.log("prop " + this.props.children);

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
                <span className={this.getClassType()}>
                    {this.validateCount()}
                </span>
                <button
                    // onClick={() =>
                    //     this.handleIncrementOnClickEventArrow("sampleEventArgs")
                    // } //We pass reference to the function and dont call
                    //But what if we want to pass event arguments? then we use arrow functions inline as shown above
                    className="btn btn-secondary btn-sm"
                    onClick={() => this.props.onIncrement(this.props.counter)}
                >
                    Increment
                </button>
                {/* {this.props.children} */}
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => this.props.onDelete(this.props.counter.id)} //The component that owns the state s responsible to modify it.
                    //Therefore the event is raised from child component and
                    //it is handled by the parent component
                >
                    Delete
                </button>
                <ul>
                    {
                        /* {this.state.tagList.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))} */
                        // this.rendertags()
                    }
                </ul>
            </React.Fragment>
        );
    }
    getClassType() {
        let className = "badge m-2 badge-";
        //className += this.state.value === 0 ? "danger" : "success";
        className += this.props.counter.value === 0 ? "danger" : "success";
        return className;
    }

    validateCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
}
//export keyword makes the class public
//default exports does not require {} when importing
export default Counter;
