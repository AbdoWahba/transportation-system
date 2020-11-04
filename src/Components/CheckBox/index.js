import React, { useState, useEffect, useRef } from 'react';
import './CheckBox.scss';

function CheckBox({ onChange, propsChecked, borderColor, propsNotAllSimilar }) {
  let [checked, setChecked] = useState(propsChecked || false);
  let [notAllSimilar, setNotAllSimilar] = useState(true && propsNotAllSimilar);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) toggle();
    else isMounted.current = true;
  }, [propsChecked]);

  useEffect(() => {
    setNotAllSimilar(propsNotAllSimilar);
  }, [propsNotAllSimilar]);

  const toggle = () => {
    if (!notAllSimilar) setChecked(!checked);
    else {
      setChecked(true);
      setNotAllSimilar(true);
    }
  };

  return (
    <label className='checkbox'>
      <input
        type='checkbox'
        name='special-checkbox'
        id='special-checkbox'
        onChange={(e) => {
          toggle();
          if (onChange) onChange(e);
        }}
        checked={checked}
      />
      <span
        className='checkbox__checkmark'
        style={
          notAllSimilar
            ? {
                backgroundColor: '#306C95',
                borderColor: borderColor ? borderColor : '#306C95',
              }
            : { borderColor: borderColor }
        }>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14.483'
          height='11.246'
          viewBox='0 0 14.483 11.246'
          className='checkbox__checkmark--svg'>
          <defs></defs>
          <path
            style={notAllSimilar ? { fill: '#306C95' } : {}}
            className='checkbox__checkmark--image'
            d='M5.546,11.435a.739.739,0,0,1-1.046,0L.325,7.259a1.109,1.109,0,0,1,0-1.568l.523-.523a1.109,1.109,0,0,1,1.569,0L5.023,7.775,12.067.731a1.109,1.109,0,0,1,1.569,0l.523.523a1.109,1.109,0,0,1,0,1.568Zm0,0'
            transform='translate(0 -0.406)'
          />
        </svg>
      </span>
    </label>
  );
}

export default CheckBox;
