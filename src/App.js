import {useState} from 'react';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import replaceCamelWithSpaces from './functions/replaceCamelWithSpaces';

function App() {
  const [buttonState, setButtonState] = useState(false);

  const toggleButton = () => {
    setButtonState(!buttonState);
  };

  return (
    <div>
      <Button buttonState={buttonState} />
      <Checkbox toggleButton={toggleButton} />
      <p>{replaceCamelWithSpaces('MediumVioletRed')}</p>
    </div>
  );
}

export default App;
