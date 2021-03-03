import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
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
            // <div className="App">
            //   <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //     <p>
            //       Edit <code>src/App.js</code> and save to reload.
            //     </p>
            //     <a
            //       className="App-link"
            //       href="https://reactjs.org"
            //       target="_blank"
            //       rel="noopener noreferrer"
            //     >
            //       Learn React
            //     </a>
            //   </header>
            // </div>

            //Since we have multiple root elements we wrap with React.Fragment
            <React.Fragment>
                <NavBar
                    totalNonEmptyCounters={
                        this.state.counter_array.filter(
                            (item) => item.value !== 0
                        ).length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counter_array}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        onReset={this.handleReset}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
