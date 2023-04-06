import React from 'react'
import {useState, useEffect} from "react"
import EmojiData from './emoji.json'
import './App.css'

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  useEffect(() =>{
   const newData = EmojiData.filter(emoji =>emoji.title.toLowerCase().includes(search.toLowerCase()));
   setData(newData);
  }, [search]);
  return (
    <div>
      <center>
        <h1>Emoji Search</h1>
        <input type="text" name = "search" value = {search} onChange={(e) => setSearch(e.target.value)}/>
      </center>
      {data.map(emoji => <div>
        <div className="card">
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("emoji copy")}}>
            {emoji.symbol}
          </div>
        </div>
      </div>)}
      
    </div>
  )
}

export default App
