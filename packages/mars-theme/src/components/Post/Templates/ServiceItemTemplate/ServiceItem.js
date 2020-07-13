import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Banner,
  Title,
  Container,
  ContentWrapper,
  Content,
} from './styles';
import Breadcrumbs from '../../../Breadcrumbs';

const ServiceItem = ({ state, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];

  console.log(post)
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return (
    <Wrapper>
      <Banner src="https://admin.sirinsoftware.com/wp-content/uploads/2020/07/2020-07-04-03-57-33.png">
        <Container>
          <Title>
            <Html2React html={post.title.rendered} />
          </Title>
        </Container>
      </Banner>
      <Container>
        <Breadcrumbs links={[
          { name: 'Services', link: `/services` },
          { name: <Html2React html={post.title.rendered} />, link: '#' }
        ]} />
      </Container>
      <Container>
        <ContentWrapper>
          <Content>
          <Html2React html={post.content.rendered} />
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
  )
}

export default connect(ServiceItem);
