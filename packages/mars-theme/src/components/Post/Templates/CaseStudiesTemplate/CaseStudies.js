import React, { useState } from 'react';
import { connect } from 'frontity';
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

const CaseStudies = ({ state, actions }) => {

  const data = [];
  const dataCat = [];

  const { acf : optionsAcf = {} } = state.options;
  const { cs_text = "", cs_title = "" } = optionsAcf;

  const dataList = state.source.get(state.router.link);
  const { totalPages } = state.source.get(state.router.link);
  let megaItems = dataList.items;
  let currentData;
  for(let i = 2; i < totalPages; i++){
    currentData = state.source.get(`${state.router.link}page/${i}`);
    if (currentData.isReady) {
      megaItems = megaItems.concat(currentData.items);
    }
  }
  megaItems.map((item, k) => {
    const post = state.source.get(`${item.link}`);
    const p_item = state.source[post.type][post.id];
    const { acf = {} } = p_item;
    const {
      category_for_green_line = "",
      post_featured_image = "",
      short_description = "",
    } = acf;
    let check = true;
    let keyCat = dataCat.length;
    console.log(p_item);
    dataCat.map((catItem, k) => {
      if(catItem.toUpperCase() === category_for_green_line.toUpperCase()){
        check = false;
        keyCat = k;
      }
    })
    if(check){
      dataCat.push(category_for_green_line);
    }
    data.push({
      src: post_featured_image,
      title: category_for_green_line,
      key: keyCat,
      content: p_item.title.rendered,
      back: {
        label: category_for_green_line,
        title: p_item.title.rendered,
        content: short_description
      }
    });
  });
  let catNull = [];
  dataCat.map((item,k)=>{
    if(item!=="") catNull.push({title:item,key:k});
  });
  console.log(data);
  console.log(catNull);

  const [items, setItem] = useState(data);
  const [active, setActive] = useState(-1);
  const [filter, setFilter] = useState(catNull);

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
        {items.length % 2 !== 0 && (
          <LastItem>
            <LastItemFrame src={CaseBox} />
            <LastItemTitle>{cs_title}</LastItemTitle>
            <LastItemDescription>
              {cs_text}
            </LastItemDescription>
          </LastItem>
        )}
      </CaseWrapper>
    </Container>
  )
}

export default connect(CaseStudies);