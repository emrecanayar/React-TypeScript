import React, { useState } from 'react';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList'

export interface IAppState {
  people: {
    name: string,
    age: string,
    url: string,
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IAppState["people"]>([
    {
      name: "Emre Can",
      url: "https://avatars.githubusercontent.com/u/20474736?v=4",
      age: "28",
      note: "Bugün gelebilirim."
    }
  ]);
  return (
    <div className="App">
      <h1>Davet Et</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
