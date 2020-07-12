import React from 'react';
import {
  Wrapper,
  Banner,
  Title,
  Container,
  ContentWrapper,
  Content,
} from './styles';
import Breadcrumbs from '../../../Breadcrumbs';

const ServiceItem = () => (
  <Wrapper>
    <Banner>
      <Container>
        <Title>Rd Center</Title>
      </Container>
    </Banner>
    <Container>
      <Breadcrumbs links={[
        { name: 'Services', link: `/services` },
        { name: 'Rd center', link: '#' }
      ]} />
    </Container>
    <Container>
      <ContentWrapper>
        <Content>
          <h2>WHAT IS IT?</h2>
          <p>
            You can trust the development of your IT project to Sirin Software. Our team will 
            provide the best quality service and complete your project to the highest standard. 
            Our team will take full responsibility for all stages of the project and can provide you with all elements of a complex solution: 
            firmware, hardware, and software. You will be in constant touch with our Project 
            Manager and be in control of all stages of the development process.
          </p>
          <h2>WHAT IS IT?</h2>
          <p>
            You can trust the development of your IT project to Sirin Software. Our team will 
            provide the best quality service and complete your project to the highest standard. 
            Our team will take full responsibility for all stages of the project and can provide you with all elements of a complex solution: 
            firmware, hardware, and software. You will be in constant touch with our Project 
            Manager and be in control of all stages of the development process.
          </p>
          <h2>WHAT IS IT?</h2>
          <p>
            You can trust the development of your IT project to Sirin Software. Our team will 
            provide the best quality service and complete your project to the highest standard. 
            Our team will take full responsibility for all stages of the project and can provide you with all elements of a complex solution: 
            firmware, hardware, and software. You will be in constant touch with our Project 
            Manager and be in control of all stages of the development process.
          </p>
        </Content>
      </ContentWrapper>
    </Container>
  </Wrapper>
);

export default ServiceItem;
