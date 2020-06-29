import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'frontity';
import {
  Container, 
  Wrapper,
  CollapseContainer,
  TableContainer,
  TableTitle,
  TableList,
  TableItem,
  TableWrapper,
  CollapseBlock,
  CollapseTitle,
} from './styles';
import CollapseList from './CollapseList';

const Faq = ({ state, libraries }) => {
  // create refs
  const tableList = useRef(null);
  const collapseContainer = useRef(null);
  // get data this page
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const { acf = {} } = post;
  const collapseCategory = acf.categories.map((category, index) => {
    return {
      active: index === 0 ? true : false,
      category_name: category.category_name,
      questions: category.questions
    }
  });

  const [listTabs, setTabs] = useState(collapseCategory);
  const [fixedsTable, setFixedsTable] = useState(true);
  const [hasBottom, setBottom] = useState(false);
  const [topPosition, setTopPosition] = useState('117px');

  useEffect(() => {
    fixationTableList();

    return function () {
      window.removeEventListener('scroll', () => {});
    }
  }, []);

  const fixationTableList = () => {
    const tableNative = tableList.current;
    const childrenWrapper = tableNative.firstElementChild;

    const { top: positionTop } = tableNative.getBoundingClientRect();
    setTopPosition(positionTop + window.pageYOffset);

    window.addEventListener('scroll', function() {
      const top = this.scrollY;
      const tableHeight = childrenWrapper.offsetHeight;

      if(top + tableHeight >= tableNative.offsetHeight) {
        setBottom(true);
      } else {
        setBottom(false);
      }
    })
  }

  const scrollQuestion = (value) => {
    const blockCollapse = collapseContainer.current.querySelector(`[data-id="${value}"]`);
    const top = blockCollapse.offsetTop - 10;

    const editTabs = listTabs.map((item, index) => {
      if(index === value) {
        return {
          ...item,
          active: true
        }
      }
      return {
        ...item,
        active: false
      }
    })

    setTabs(editTabs);
    window.scrollTo({
      top,
      behavior: "smooth"
    });
  }

  return (
    <Container>
      <Wrapper>
        <CollapseContainer ref={collapseContainer}>
          {
            listTabs.map((item, key) => {
              return (
                <CollapseBlock key={key} data-id={key}>
                  <CollapseTitle 
                    color={key % 2 !== 0 ? 'yellow' : null}>
                    {item.category_name}
                  </CollapseTitle>
                  <CollapseList 
                    color={key % 2 !== 0 ? 'green' : null}
                    libraries={libraries} 
                    elements={item.questions}/>
                </CollapseBlock>
              )
            })
          }
        </CollapseContainer>

        <TableContainer ref={tableList}>
          <TableWrapper 
            fixeds={fixedsTable} 
            top={topPosition} 
            bottom={hasBottom}>
            <TableTitle>Linux, embedded and IOT</TableTitle>
            <TableList>
              {
                listTabs.map((item, index) => {
                  return (
                    <TableItem
                      key={index}
                      active={item.active}
                      onClick={() => scrollQuestion(index)}
                      >
                        {item.category_name}
                      </TableItem>
                  )
                })
              }
            </TableList>
          </TableWrapper>
        </TableContainer>
      </Wrapper>
    </Container>
  )
}

export default connect(Faq);