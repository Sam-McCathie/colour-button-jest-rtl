import React, {useState} from 'react';

const Button = ({buttonState}) => {
  const [color, setColor] = useState({
    style: 'red',
    button: 'blue',
  });

  const changeColor = () => {
    if (color.style === 'red') setColor({style: 'blue', button: 'red'});
    else setColor({style: 'red', button: 'blue'});
  };

  return (
    <button
      style={{backgroundColor: !buttonState ? color.style : 'grey'}}
      disabled={buttonState}
      onClick={changeColor}>
      Change to {color.button}
    </button>
  );
};

export default Button;
