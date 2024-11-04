import React from 'react';
import Wrapper from './components/Wrapper.tsx';
import Counter from './components/Counter.tsx';
import Fetch from './components/Fetch.tsx';
import Sort from './components/Sort.tsx';
import Form from './components/Form.tsx';

function App() {
  return (
    <div className="w-8 col-offset-2 p-3 h-screen surface-100">
      <h1>JavaScript(React) Interview</h1>
      <Wrapper number={1}>
        <Counter />
      </Wrapper>
      <Wrapper number={2} >
        <Fetch />
      </Wrapper>
      <Wrapper number={3} >
        <Sort />
      </Wrapper>
      <Wrapper number={4} >
        <Form />
      </Wrapper>
      <Wrapper number={5} >
        <ul>
          <li><h4>Run the Repo Tests.</h4></li>
          <li><h4>You'll find a few tests in <code>"tests/Counter.test.ts"</code>.</h4></li>
          <li><h4>These tests are for the component <code>/CounterTest.tsx</code>.</h4></li>
          <li><h4>Debug and get the tests to pass without changing the tests. Only change code.</h4></li>
        </ul>
      </Wrapper>
    </div>
  );
}

export default App;
