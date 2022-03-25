import app from './App.css';
import starships from './services/sw-api'
import React, {useState, useEffect} from 'react';
//import StarshipCard from './StarshipCard';

  function App () {
      const [ships, setShips] = useState([])
    useEffect(() => {
        starships()
        .then(res => res.json())
        .then((data) => setShips(data.results))
    }, []);
    console.log(ships)

   return (
       <div className="app">
           <h1>STAR WARS STARSHIPS</h1>
           <ul className="ship"> {ships.map(ship =>
             <li className="li" key={ship.name} >{ship.name}</li>
            
                )}        
           </ul>
       </div>
)
}

export default App;

//key={ship.name}
/////////////////////////////////////////////////////////////////////////////////
//  const [starships, setStarships] = useState([]);
//   const fetchShip = async () => {
//     const response = await fetchSWAPI;
//     const data = await response.json();
//     setStarships(data);
//     console.log(data.results[0].name);  // Should output 1st ship name
//   };

//   useEffect(() => {
//     fetchShip();
//   }, []);
  
//   return (
//     console.log(starships)
//   );

/////////////////////////////////////////////////////////////////////////////////

// import "./App.css";
// import FetchShip from "./FetchShip";

// export default function App () {
//   let state = FetchShip;
//     return (
//       <div className="container">
        
//       </div>
//     );
// };













    // function App() {
    //  return (
//      <div> 
//           <StarshipCard  />
//      </div>
   // )  
   // }   
    //    <div className="card">
    //        <StarshipCard  />
    //    <
    //    <text> {console.log(starships.result[0])}</text>
    //    </div>
 
