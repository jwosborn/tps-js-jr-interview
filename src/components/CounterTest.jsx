import React, { useState } from 'react';

const CounterTest = () => {
    const [clicks, setClicks] = useState();

    const increment = () => {
      // Bug: setCount does not increment the current value correctly
      setClicks(clicks);
    };

    return (
        <div>
            <h2>Clicks: {clicks}</h2>
            <button onClick={() => setClicks(clicks + 1)}>Click me</button>
        </div>
    );
};

export default CounterTest;
