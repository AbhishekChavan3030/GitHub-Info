import React, { useEffect, useState } from 'react'
import "./App.css"
import axios from 'axios'
import Middle from './Components/Middle';
import Image from "./assets/Image.png";

const App = () => {
  const [username, setUsername] = useState();
  const [error, setError] = useState();

  const [userDetails, setUserDetails] = useState(null);


  function handlesubmit(e) {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${username}`).then((val) => {
      setUserDetails(val.data)

    }).catch((err) => {
      setError("Something Went Wrong " + err)
      console.log(error)

    })
  }

  function handleStyle() {
    const middle = document.getElementById('middle');
    const left = document.getElementById('left');
    const root = document.getElementById('root');

    middle.style.width = "80%";
    left.style.width = "20%";

    left.style.transitionDuration = "1s"
    middle.style.transitionDuration = "1s"

  }

  return (
    <div id='App'>
      <div className="left" id='left'>      

        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder='Enter GitHub Username'
            onChange={(e) => { setUsername(e.target.value) }} />

          <div id='btn'>
            <button onClick={handleStyle}>Submit</button>
            <button onClick={() => window.location.reload()}>Reset</button>
          </div>

        </form>

      </div>
      <div className="middle" id='middle'>
        {userDetails != null ? <Middle data={userDetails} /> :
          <h1>Welcome</h1>
        }

<h3 id='Owner'> A Project by <a href="https://www.linkedin.com/in/abhishekchavan3030/" >Abhishek Chavan</a></h3>

      </div>
    </div>
      
  )
}

export default App