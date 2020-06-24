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
import Collapse from './Collapse';

const Faq = () => {
  const tableList = useRef(null);
  const [fixedsTable, setFixedsTable] = useState(false);

  useEffect(() => {
    fixationTableList();
  }, []);

  const fixationTableList = () => {
    const { top: positionTop } = tableList.current.getBoundingClientRect();
    
    window.addEventListener('scroll', function() {
      const top = this.scrollY;
      
      if(top + 85 >= positionTop) {
        setFixedsTable(true)
      } else {
        setFixedsTable(false)
      }
    })
  }

  return (
    <Container>
      <Wrapper>
        <CollapseContainer>
          <CollapseBlock>
            <CollapseTitle>
              Sirin <br />
              software
            </CollapseTitle>
            <Collapse/>
            <Collapse/>
          </CollapseBlock>
        </CollapseContainer>

        <TableContainer ref={tableList}>
          <TableWrapper fixeds={fixedsTable} top="117">
            <TableTitle>Linux, embedded and IOT</TableTitle>
            <TableList>
              <TableItem active={true}>SIRIN SOFTWARE</TableItem>
              <TableItem>DEVELOPMENT PROCESS</TableItem>
              <TableItem>COMMUNICATION</TableItem>
            </TableList>
          </TableWrapper>
        </TableContainer>
      </Wrapper>
    </Container>
  )
}

export default Faq;