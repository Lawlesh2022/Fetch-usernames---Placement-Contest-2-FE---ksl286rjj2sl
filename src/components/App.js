import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
const App = () => {
    const[name, setName] = useState("");
    const[data, setData] = useState("");
    const url = "https://content.newtonschool.co/v1/pr/main/users"
    useEffect(()=>{
       fetchData()
    }, []);
    const fetchData = ()=>{
         fetch(url).then((res)=>res.json()).then((response)=>{
            console.log(response);
            setData(response)
        })
    }
    const changeInput=(e)=>{
      const input = e.target.value;
      data.map((e)=>{
        if(input==e.id){
          setName(e.name)          
        }
        if(input == ""){
          setName('Woodrow Davis')
        }
     })     

  }

  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
}


export default App;
