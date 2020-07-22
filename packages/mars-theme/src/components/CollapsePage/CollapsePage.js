import React from 'react';
import { connect } from 'frontity';
import { filterQuestions } from '../../utils/filterQuestions';
import { Container } from './styles';
import CollapseList from '../Post/Templates/FaqTemplate/CollapseList';

const CollapsePage = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const result = filterQuestions(state.theme.faq, data.id);

  return (
    <Container>
      <CollapseList elements={result} libraries={libraries} />
    </Container>
  );
};

export default connect(CollapsePage);
