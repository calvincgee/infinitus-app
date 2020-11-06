import { useState, useEffect } from 'react'
import Category from './Category';

import './App.css'

function App() {

  const url = 'https://us-central1-infinitus-interviews.cloudfunctions.net/take-home-b';
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [numClicked, setNumClicked] = useState(0);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(info => setData(info))
  }, []);

  useEffect(() => {
    let temp = []
    data.forEach(object => {
      if (!temp.includes(object.category)) {
        temp.push(object.category);
      }
    });
    setCategories(temp);
    setIsLoaded(true);
  }, [data]);

  function increaseClicked() {
    setNumClicked(numClicked + 1);
  }

  function decreaseClicked() {
    setNumClicked(numClicked - 1);
  }

  return (
    <div className="App">
      <div style = {{display: "flex", flexDirection: "column", alignItems:"center"}}>
        <h1 stlye = {{marginTop: "50px"}}>AI Usage is Everywhere!</h1>
        <img src = "https://twiki.cern.ch/twiki/pub/LHCb/Bender/bender-for-website.jpg" alt = "bender" width = "150" height = "200"></img>
        <h3>Click the buttons below to explore how the robots are taking over:</h3>
        <div className = "categoryCont">
          {
            isLoaded
            ? categories.map(category => (
              <Category key = {category} name = {category} list = {data.filter(obj => obj.category === category)} increase = {increaseClicked} decrease = {decreaseClicked}></Category>
            ))
            : <div><p>Loading categories...</p></div>
          }
        </div>
        {
          numClicked > 0
          ? <div style ={{display:"flex", flexDirection:"row", alignItems:"center"}}><div className = "green box"></div><p style = {{marginLeft:"5px", marginRight:"10px"}}> = enabled</p><div className = "red box"></div><p style = {{marginLeft:"5px"}}> = disabled</p></div>
          : <div></div>
        }
      </div>
    </div>
  );
}

export default App;
