import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  const row1 = ['AC', '+/-', '%', '÷'];
  const row2 = ['7', '8', '9', 'x'];
  const row3 = ['4', '5', '6', '-'];
  const row4 = ['1', '2', '3', '+'];
  const row5 = ['0', '.', '='];

  function handleClick(buttonName) {
    return clickHandler(buttonName);
  }

  return (
    <div className="button-panel">
      <div className="row row1">
        { row1.map((btn, index) => <Button key={btn} clickHandler={handleClick} name={btn} color={index !== 3 ? '#ddd' : null} />) }
      </div>
      <div className="row row2">
        { row2.map((btn, index) => <Button key={btn} clickHandler={handleClick} name={btn} color={index !== 3 ? '#ddd' : null} />) }
      </div>
      <div className="row row3">
        { row3.map((btn, index) => <Button key={btn} clickHandler={handleClick} name={btn} color={index !== 3 ? '#ddd' : null} />) }
      </div>
      <div className="row row4">
        { row4.map((btn, index) => <Button key={btn} clickHandler={handleClick} name={btn} color={index !== 3 ? '#ddd' : null} />) }
      </div>
      <div className="row row5">
        { row5.map((btn, index) => <Button key={btn} clickHandler={handleClick} wide={btn === '0'} name={btn} color={index !== 2 ? '#ddd' : null} />) }
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
