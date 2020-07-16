import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import {
  Wrapper, 
  Container,
  Banner,
  FilterContainer,
} from './styles';
import Items from './TeamMembersItem';
import bg from '../../../../img/engenners-bg.jpg';
import CollapseList from '../FaqTemplate/CollapseList';
import { filterQuestions } from '../../../../utils/filterQuestions';

const TeamMembers = ({ state }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTeams, setShowTeams] = useState([]);
  const data = state.source.get(state.router.link);
  const { items = {} } = data;
  const { totalPages } = data;

  const faqArray = filterQuestions(state, data.id);

  let fullTeams = items;
  let currentData;
  for(let i = 2; i <= totalPages; i++){
    currentData = state.source.get(`${state.router.link}page/${i}`);
    if (currentData.isReady) {
      fullTeams = fullTeams.concat(currentData.items);
    }
  }

  const categories = new Set();

  categories.add({
    id: 0,
    name: 'All categories'
  });

  const teams = fullTeams.map((item, index) => {
    const result = state.source[item.type][item.id];

    if(result.teammembers_cat[0]) {
      categories.add(state.source['teammembers_cat'][result.teammembers_cat[0]]);
    }

    return {
      ...result,
      media: state.source.attachment[result.featured_media]
    }
  });

  useEffect(() => {
    setShowTeams(teams);
  }, []);

  const findElements = id => {
    let hasId = teams.filter(item => {
      const result = item.teammembers_cat.find(item => item === id);

      if(result) {
        return true;
      }
    });
    
    return hasId.length;
  }

  const renderCategory = [];
  categories.forEach((value) => {
    if(value.id === 0) {
      renderCategory.push({
        ...value,
        counter: teams.length
      })
    } else {
      renderCategory.push({
        ...value,
        counter: findElements(value.id),
      })
    }
  });

  const filterElements = (event, el) => {
    event.preventDefault();
    
    setActiveIndex(el.id);

    if(el.id === 0) {
      setShowTeams(teams);

      return;
    }

    const filterArray = teams.filter(item => {
      if(item.teammembers_cat) {
        const result = item.teammembers_cat.find(item => item === el.id);

        if(result) {
          return item;
        }
      }
    });

    setShowTeams(filterArray);
  }

  return (
    <Wrapper>
      <Banner url={bg} >
        <div className="container">
          <h1>
            Our Engineers 
          </h1>
        </div>
      </Banner>
      <div className="container">
        <FilterContainer>
          <ul>
            {
              renderCategory.map((item, index) => {
                return (
                  <li key={index}>
                    <span
                      onClick={(event) => filterElements(event, item)}
                      className={activeIndex === item.id ? 'selected' : null}
                      >
                      { item.name } ({item.counter})
                    </span>
                  </li>
                )
              })
            }
          </ul>
        </FilterContainer>
      </div>

      <div className="container">
        <Items teams={showTeams} />
      </div>

      <Container>
        <CollapseList elements={faqArray} libraries={libraries} />
      </Container>
    </Wrapper>
  )
}

export default connect(TeamMembers);