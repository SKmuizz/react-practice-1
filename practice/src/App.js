import "./App.css";
import Profile from "./components/Profile";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";

function App() {
  const [data , setData] = useState({
    name: "",
    age: "",
    city:"",
  })

  const [isEmpty, setIsEmpty] = useState(true); 


  return (
    <div className="container">
      {
        isEmpty == true ?
          <h1>No Data</h1>
        :
        <>
        {
          data.name != '' ? <h1>Name: {data.name}</h1> : <></>
        }
        {
          data.age != '' ? <h1>Age: {data.age}</h1> : <></>
          
        }
        {
          data.city != '' ? <h1>city: {data.city}</h1> : <></>
          
        }
        </>
      }
      
      <input type="text" onChange={
        (e)=>{
          setData({
            ...data,
            name: e.target.value
          })
          setIsEmpty(e.target.value == '' && data.age == '' && data.city == '' ? true : false)
        }
      }/>
      <input type="text" onChange={
        (e)=>{
          setData({
            ...data,
            age: e.target.value
          })
          setIsEmpty(data.name == '' &&  e.target.value == '' && data.city == '' ? true : false)
          }}/>
          <input type="text" onChange={
        (e)=>{
          setData({
            ...data,
            city: e.target.value
          })
          setIsEmpty(data.name == '' && data.age == '' &&  e.target.value == '' ? true : false)
        }
      }/>
    </div>
  )
   // const [profiles, setProfiles] = useState([]);
  // useEffect(() => {
  //   fetch('/data/Profile.json')
  //     .then((response) => response.json())
  //     .then((data) => setProfiles(data))
  //     .catch((error) => console.error("Error fetching the profiles:", error));
  // }, []);

  // return (
  //   <div className="container mt-5 mb-5">
  //     <div className="row">
  //       <h1 className="mb-5">GitHubs Profile</h1>
  //       {profiles.map((profile, key) => {
  //         return <Profile key={key} profile={profile} />;
  //       })}
  //     </div>
  //   </div>
  // );

  
}

export default App;
