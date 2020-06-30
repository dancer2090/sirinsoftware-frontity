import React, { useState } from 'react'
import Collapse from '../Collapse';

const CollapseList = ({ elements = [], color, libraries }) => {
  // add elements params active
  const filterDate = elements.map(item => {
    return {...item, active: false}
  });

  const [dataClone, setDataClone] = useState(filterDate);
  const toggleCollapse = (data, active, index) => {
    const newData = dataClone.map((item, indx) => {
      if (index === indx) {
        return {
          ...item,
          active: active
        }
      }

      return item;
    });
    
    setDataClone(newData);
  }

  return (
    <>
      {
        dataClone.map((item, index) => {
          return (
            <Collapse 
              key={index} 
              data={item}
              index={index}
              libraries={libraries}
              active={item.active}
              onToggle={toggleCollapse}
              color={color} />
          )
        })
      }
    </>
  )
}

export default CollapseList;