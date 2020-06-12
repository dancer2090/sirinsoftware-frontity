import React from 'react';
import {
  Block, 
  FormBlock, 
  QuestionBlock, 
  QuestionShadow, 
  Question,
  FormText,
  InputBlock,
} from './styles';
import Form from './Form';

const FeedbackForm = () => {
  const submitForm = (value) => {
    console.log(value);
  }

  return (
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
          We will get in touch with you within <b>24 business hours</b>
        </FormText>
        <InputBlock>
          <Form submitForm={submitForm}/>
        </InputBlock>
      </FormBlock>
    </Block>
  )
}

export default FeedbackForm;