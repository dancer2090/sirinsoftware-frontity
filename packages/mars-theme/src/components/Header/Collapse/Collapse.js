import React, { useState, useRef } from 'react';
import SvgSprite from '../../Post/Templates/StandartTemplate/SvgSprite';

const Collapse = ({ title, children }) => {
  const collapse = useRef(null);
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');

  const toggle = () => {
    setHeight(active ? '0px' : collapse.current.scrollHeight);
    setActive(!active);
  };

  return (
    <>
      <span onClick={toggle} style={{ display: 'flex', alignItems: 'center' }}>
        { title }
        <SvgSprite
          name="arrow-left"
          style={{
            width: 10, height: 10, marginLeft: 10, transform: `rotate(${active ? '-90deg' : '-180deg'})`, transition: 'all .3s ease-in-out',
          }}
        />
      </span>
      <div ref={collapse} style={{ maxHeight: height, transition: 'all .3s ease-in-out', overflow: 'hidden' }}>
        { children }
      </div>
    </>
  );
};


export default Collapse;
