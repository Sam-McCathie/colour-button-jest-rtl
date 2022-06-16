import React from 'react';

const Checkbox = ({toggleButton}) => {
  return (
    <input
      type="checkbox"
      onClick={toggleButton}
      aria-label="toggle-checkbox"></input>
  );
};

export default Checkbox;
