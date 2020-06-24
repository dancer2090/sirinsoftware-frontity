import React, { useState } from 'react';
import {
  Container, 
  HeaderFilter,
  FilterItem,
  CaseWrapper,
  ItemBlock,
  LastItem,
  LastItemFrame,
  LastItemTitle,
  LastItemDescription,
  ItemWrapper,
  ItemTitle,
  ItemLabel,
  ItemDescription,
  CaseItemTitle,
  CaseContent,
  CaseItemWrapper
} from './styles';
import CaseBox from '../../../../img/case-box.svg';

const genegateDate = () => {
  const data = []
  let key = '';

  for(let i = 0; i < 5; i++) {
    if(i < 3) {
      key = '1'
    } else if(i >= 2 && i < 3) {
      key = '2';
    } else {
      key = '3';
    }

    data.push({
      src: 'https://admin.sirinsoftware.com/wp-content/uploads/2019/05/2019-05-16-16-46-45.jpg',
      title: 'IOT',
      key,
      content: 'Increasing the scalability of a cloud-based system for IoT products.',
      back: {
        label: 'Mobile & Web development',
        title: 'Mobile app for fire fighters',
        content: `By 2020, there will be an estimated 30 billion devices 
        connected to the Internet. The biggest impediment holding back 
        this connectivity is that frequently these devices need a technician to get 
        them running smoothly. 
        Another problem is that most of the devices have no input-output interface and no keyboard.`
      }
    })
  }

  return data;
}

const genegateFilter = () => {
  return [
    {
      title: 'Hardware <br /> design',
      key: '1'
    },
    {
      title: 'Embedded <br /> software',
      key: '2'
    },
    {
      title: 'Firmware <br /> engineering',
      key: '3'
    },
    {
      title: 'IOT',
      key: '1'
    },
    {
      title: 'CLOUD',
      key: '2'
    },
    {
      title: `Mobile & app <br />
      development`,
      key: '3'
    } 
  ]
}

const CaseStudies = () => {
  const data = genegateDate();
  const [items, setItem] = useState(data);
  const [active, setActive] = useState(-1);
  const [filter, setFilter] = useState(genegateFilter);

  const filters = (item, index) => {
    if(active === index) {
      setActive(-1)
      setItem(data);

      return
    } 
    const filterData = data.filter(el => el.key === item.key)

    setItem(filterData)
    setActive(index)
  }

  return (
    <Container>
      <HeaderFilter>
      {
        filter.map((item, index) => {
          return (
            <FilterItem 
              onClick={() => filters(item, index)}
              active={active === index ? true : false}
              key={index} dangerouslySetInnerHTML={{__html: item.title}}>
            </FilterItem>
          )
        })
      }
      </HeaderFilter>
      <CaseWrapper>
        { items.map((item, index) => {
          return (
            <ItemBlock 
              key={index}>
              <CaseItemWrapper
                src={item.src}>
                  <CaseItemTitle>
                    { item.title }
                  </CaseItemTitle>
                  <CaseContent>
                    { item.content }
                  </CaseContent>
                </CaseItemWrapper>

                <ItemWrapper>
                  <ItemLabel>
                    { item.back.label }
                  </ItemLabel>
                  <ItemTitle>
                    { item.back.title }
                  </ItemTitle>
                  <ItemDescription>
                    { item.back.content }
                  </ItemDescription>
                </ItemWrapper>
            </ItemBlock>
          )
        })
        }
        
        <LastItem>
          <LastItemFrame src={CaseBox} />
          <LastItemTitle>Some text</LastItemTitle>
          <LastItemDescription>
            The client required a solution that would evolve the capabilities of its next generation of smartwatches
          </LastItemDescription>
        </LastItem>
      </CaseWrapper>
    </Container>
  )
}

export default CaseStudies;