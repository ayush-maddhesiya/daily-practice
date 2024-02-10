
// import axios from 'axios';
// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './vite.svg'
// import './App.css'

// function App() {
//   const [Jokes, setJokes] = useState([]);

//   useEffect(  ()=>{
//     axios.get('/api/jokes')
//     .then((Response)=>{
//       setJokes(Response.data);
//     })
//     .catch((error)=>{
//       console.error(error);
//     })
//   },[axios]);
//   return (
//     <>
//       <h2>Jokes</h2>
//       <p>Jokes : {Jokes.length}</p>
//       {
//         Jokes.map((Jokes,index)=>(
//           <div key={Jokes.age}>
//             <h3>{Jokes.name}</h3>
//             <h3>{Jokes.city}</h3>
//           </div>
//         ))
//       }
//     </>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react'; // Import React
import axios from 'axios'; // Import axios
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg'; // Corrected path
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Empty dependency array, so it only runs once

  return (
    <>
      <h2>Jokes</h2>
      <p>Jokes : {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={index}>
          <h3>{joke.name}</h3>
          <h3>{joke.city}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
