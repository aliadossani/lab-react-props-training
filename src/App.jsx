import "./App.css";
import React from 'react';
import IdCard from './components/IdCard';
import Greetings from "./components/Greeting";


const IdArray = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  },
]

const App = () => {
  return (
    <div className="App">
      <IdCard {...IdArray[0]} />

      <IdCard {...IdArray[1]} />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>


    </div>
  );
}

export default App;
