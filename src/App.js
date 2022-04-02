import './App.css';
import React  from 'react';

function App() {
  const[startWarsData, setStartWarsData] = React.useState({})
  const[count, setCount] = React.useState(1);

  React.useEffect(function(){
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(res => res.json())
    .then(data => setStartWarsData(data))
  }, [count])

  return (
    <div className="App">
      <pre>{JSON.stringify(startWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>NEXT</button>
    </div>
  );
}

export default App;
