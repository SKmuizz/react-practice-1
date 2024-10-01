import { useEffect } from 'react';
import './App.css';
import Profile from './components/Profile';

function App() {

  const profiles =[
    
    {
    name :"Skmuizz",
    img :"https://avatars.githubusercontent.com/u/182518127?v=4",
    about :"i am  web student",

  },
    {
    name :"samit",
    img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxgvovMnbZgJNfJZ3kKgWdvCGasVNtlmNgg&s",
    about :"i am  web developer",
  },
    {
    name :"rehan",
    img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPYI8YHdzogEU5Xp74SdcZqZZnAnpZ73BJg&s",
    about :"i am  developer",
  },
  {
    name :"huzaif",
    img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmH36NKXungpx2CsBeZTycBh-5M08gr1d_xg&s",
    about :"i am  developer",
  }
]
useEffect(()=>{
  fetch('/data/profiles.json')
  .then(data => setProfiles (data))
  .catch (error => console.error ('error fetching the profiles:',error))
},[]);
  return (
    <div className='container mt-5'>
      <div className='row'>
      <h1> Github profile</h1>
      {profiles.map ((profile ,key) =>{
        return<Profile key={key} profile={profile}/>
      })}
      </div>
    </div>
  );
}

export default App;
