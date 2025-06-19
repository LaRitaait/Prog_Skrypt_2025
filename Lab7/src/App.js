import React from 'react';
import Hello from './Hello';
import HelloWithProps from './HelloWithProps';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';
import TodoList from './TodoList';
import LoginForm from './LoginForm';

function App() {
  return (
    <div>
      <Hello />
      <HelloWithProps name="Anna" />
      <HelloWithProps name="Bartek" />
      <HelloWithProps name="Celina" />
      <Counter />
      <InputTracker />
      <LoginStatus isLoggedIn={true} />
      <LoginStatus isLoggedIn={false} />
      <TodoList todos={['Zadanie 1', 'Zadanie 2', 'Zadanie 3']} />
      <LoginForm />
    </div>
  );
}

export default App;
