import React, { useEffect, useRef, useState } from 'react'
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

const collapseGenerate = () => {
  const result = []
  for(let i = 0; i < 5; i++) {
    result.push({
      title: 'Why should I hire your company?',
      content: `We offer high-quality engineering in Embedded, Linux and IoT related services. We keep our focus on these services in order to attract the best talent and expertise in the business. Our main goal is to act not as much as the contractor but rather as the trusted partner which makes software R&D process easier, more cost-effective and speeds up the 
      development of new products together with clients.`,
      active: false
    });
  }

  return result;
}

let tabs = [
  {
    title: 'SIRIN SOFTWARE',
    active: true,
  },
  {
    title: 'DEVELOPMENT PROCESS',
    active: false,
  },
  {
    title: 'COMMUNICATION',
    active: false,
  }
]

const Faq = () => {
  const tableList = useRef(null);
  const collapseContainer = useRef(null);
  const [listTabs, setTabs] = useState(tabs);
  const [fixedsTable, setFixedsTable] = useState(true);
  const [hasBottom, setBottom] = useState(false);
  const [topPosition, setTopPosition] = useState('117px');

  useEffect(() => {
    fixationTableList();
  }, []);

  const fixationTableList = () => {
    const { top: positionTop } = tableList.current.getBoundingClientRect();
    setTopPosition(positionTop);

    window.addEventListener('scroll', function() {
      const top = this.scrollY;
      const tableHeight = tableList.current.firstElementChild.offsetHeight;

      if(top + tableHeight >= tableList.current.offsetHeight) {
        setBottom(true);
      } else {
        setBottom(false);
      }
    })
  }

  const scrollQuestion = (value) => {
    const blockCollapse = collapseContainer.current.querySelector(`[data-id="${value}"]`);
    const titleHeight = blockCollapse.querySelector(`h2`).offsetHeight;
    const { top } = blockCollapse.getBoundingClientRect();

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
      top: (top - (titleHeight + 10)),
      behavior: "smooth"
    });
  }

  return (
    <Container>
      <Wrapper>
        <CollapseContainer ref={collapseContainer}>
          <CollapseBlock>
            <CollapseTitle data-id="0">
              Sirin <br />
              software
            </CollapseTitle>
            <CollapseList elements={collapseGenerate()}/>
          </CollapseBlock>
          <CollapseBlock  data-id="1">
            <CollapseTitle color="yellow">
              DEVELOPMENT <br/>
              PROCESS
            </CollapseTitle>
            <CollapseList color="green" elements={collapseGenerate()}/>
          </CollapseBlock>
          <CollapseBlock  data-id="2">
            <CollapseTitle color="yellow">
              DEVELOPMENT <br/>
              PROCESS
            </CollapseTitle>
            <CollapseList color="green" elements={collapseGenerate()}/>
          </CollapseBlock>
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
                        {item.title}
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

export default Faq;