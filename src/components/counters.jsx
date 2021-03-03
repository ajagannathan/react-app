import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
    state = {
        counter_array: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 2 },
            { id: 4, value: 6 },
        ],
        children_array: ["child 1", "child 2", "child 3"],
    };
    handleIncrement = (counter) => {
        //The spread operator clones the array/object
        // the objects in the new array counters is exactly
        // the same as the counter_array
        //This is a bad practice
        //Instead we clone the counter object we receive
        const counters = [...this.state.counter_array];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counter_array: counters });
    };
    handleDelete = (counter_id) => {
        const updatedCounterArray = this.state.counter_array.filter(
            (item) => item.id !== counter_id
        );
        this.setState({ counter_array: updatedCounterArray });
        console.log("ID : ", updatedCounterArray);
    };
    handleReset = () => {
        const resetCounterArray = this.state.counter_array.map((counter) => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counter_array: resetCounterArray });
    };
    render() {
        return (
            <div>
                <div>
                    <button
                        className="btn btn-primary btn-sm m-2"
                        onClick={this.handleReset}
                    >
                        Reset
                    </button>
                </div>
                {this.state.counter_array.map((counterObj) => (
                    <Counter
                        key={counterObj.id}
                        //value={count.value}       //Instead of many attributes its better to pass the
                        //id={count.id}             //counter Object (counterObj) into the counter attribute
                        //This encapsulates the properties of counter.
                        //Although key and id attributes are the same, the key is inaccessible
                        //from this.props. It is used internally by react to update the DOM.
                        //So we must provide another id to reference the component
                        counter={counterObj}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    >
                        {this.state.children_array.map((child) => (
                            <h4 key={child}>{child}</h4> //Children can be accessed using
                            //this.props.children in counter Component
                        ))}
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
