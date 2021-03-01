import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
    state = {
        counter_array: [
            { id: 2, value: 0 },
            { id: 1, value: 0 },
            { id: 3, value: 2 },
            { id: 4, value: 6 },
        ],
    };
    render() {
        return (
            <div>
                {this.state.counter_array.map((count) => (
                    <Counter
                        key={count.id}
                        value={count.value}
                        selected={true}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
