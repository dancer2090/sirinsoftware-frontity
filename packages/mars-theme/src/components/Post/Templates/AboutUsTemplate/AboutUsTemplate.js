import React from 'react';
import { connect, styled } from 'frontity';

const Container = styled.div`
  background-color: #F5F6FA;
`;

const AboutUsTemplate = ({ state }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];

  return (
    <Container>

    </Container>
  );
};

export default connect(AboutUsTemplate);
