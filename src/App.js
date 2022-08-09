import './App.css';
import Button from './components/Button';
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Counter from './components/Counter';
import { useState } from 'react'

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };

  const restartCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
     <div className='freecodecamp-logo-container'>
      <img className='freecodecamp-logo'
      src={freeCodeCampLogo}
      alt='Logo freeCodeCamp' />
     </div>
     <div className='main-container-counter'>
     <Counter numClicks={numClicks} />
     <Button 
      text= 'Click'
      itIsClickButton={true}
      handleClick={handleClick}
     />
     <Button 
      text= 'Restart'
      itIsClickButton={false}
      handleClick={restartCounter}
     />
     </div>
    </div>
  );
}

export default App;
