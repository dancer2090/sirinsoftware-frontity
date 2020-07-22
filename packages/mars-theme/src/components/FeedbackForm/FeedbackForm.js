import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import {
  Block,
  FormBlock,
  QuestionBlock,
  QuestionShadow,
  Question,
  FormText,
  InputBlock,
  Container,
} from './styles';
import Form from './Form';
import { filterQuestions } from '../../utils/filterQuestions';
import CollapseList from '../Post/Templates/FaqTemplate/CollapseList';

const FeedbackForm = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);

  const submitForm = (value) => {
    actions.theme.sendForm(value);
  };
  const result = filterQuestions(state.theme.faq, data.id);
  const faqArray = result

  console.log(faqArray);
  return (
    <>
      <Block>
        <FormBlock>
          <QuestionBlock>
            <QuestionShadow>
              HOW CAN WE HELP YOU?
            </QuestionShadow>
            <Question>
              HOW CAN WE HELP YOU?
            </Question>
          </QuestionBlock>
          <FormText>
            We will get in touch with you within
            {' '}
            <b>24 business hours</b>
          </FormText>
          <InputBlock>
            <Form submitForm={submitForm} />
          </InputBlock>
        </FormBlock>
      </Block>
      {/*<Container>
        <CollapseList elements={faqArray} libraries={libraries} />
      </Container>*/}
    </>
  );
};

export default connect(FeedbackForm);
