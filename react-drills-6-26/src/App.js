import React from 'react';
import './App.css';
import Accordion from './statedrills/Accordion';

function App() {
  return (
    <div className="App">
      <Accordion sections={[
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]} />
    </div>
  );
}

export default App;
