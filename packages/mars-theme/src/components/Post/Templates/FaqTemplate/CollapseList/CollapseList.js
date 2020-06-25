import React, { useState } from 'react'
import Collapse from '../Collapse';

const CollapseList = ({ elements = [], color }) => {
  const [dataClone, setDataClone] = useState(elements);

  const toggleCollapse = (data, active, index) => {
    const newData = elements.map((item, indx) => {
      if (index === indx) {
        return {
          ...item,
          active: active
        }
      }
      return {
        ...item,
        active: false
      }
    })

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