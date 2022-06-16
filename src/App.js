import {useState} from 'react';
import Button from './components/Button';
import Checkbox from './components/Checkbox';

function App() {
  const [buttonState, setButtonState] = useState(false);

  const toggleButton = () => {
    setButtonState(!buttonState);
  };

  return (
    <div>
      <Button buttonState={buttonState} />
      <Checkbox toggleButton={toggleButton} />
    </div>
  );
}

export default App;
