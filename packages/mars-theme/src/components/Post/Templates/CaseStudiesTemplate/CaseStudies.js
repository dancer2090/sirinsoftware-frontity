import React from 'react';
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
  ItemDescription
} from './styles';
import CaseBox from '../../../../img/case-box.svg';

const CaseStudies = () => {
  return (
    <Container>
      <HeaderFilter>
          <FilterItem>Hardware <br /> design</FilterItem>
          <FilterItem active={true}>Embedded <br /> software</FilterItem>
          <FilterItem>Firmware <br /> engineering</FilterItem>
          <FilterItem>IOT</FilterItem>
          <FilterItem>CLOUD</FilterItem>
          <FilterItem>
            Mobile & app <br />
            development
          </FilterItem>
      </HeaderFilter>
      <CaseWrapper>
        <ItemBlock />
        <ItemBlock />
        <ItemBlock />
        <ItemBlock textBlock={true}>
          <ItemWrapper>
            <ItemLabel>
              Mobile & Web development
            </ItemLabel>
            <ItemTitle>
              Mobile app for fire fighters
            </ItemTitle>
            <ItemDescription>
              By 2020, there will be an estimated 30 billion devices 
              connected to the Internet. The biggest impediment holding back 
              this connectivity is that frequently these devices need a technician to get 
              them running smoothly. 
              Another problem is that most of the devices have no input-output interface and no keyboard.
            </ItemDescription>
          </ItemWrapper>
        </ItemBlock>
        <ItemBlock />
        <ItemBlock />
        <ItemBlock />
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