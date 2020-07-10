import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import {
  Container,
  Title,
  Form,
  Input,
  TextArea,
  Button,
  SingleComment,
  Author,
  Fecha,
  SingleCommentContent,
  CommentsContainer,
  CommentsSubmitText,
  RecaptchaText,
} from './styles';

const CommentsForm = ({ libraries, state, actions }) => {
  // Post Id for single post
  const dataP = state.source.get(state.router.link);
  const postId = dataP.id;

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const preErrors = {
    author_name: false,
    author_email: false,
    content: false,
    post: false,
  };
  const preForm = {
    author_name: '',
    author_email: '',
    content: '',
    post: postId,
  };

  const [formError, setFormErrorState] = useState(preErrors);
  const [formState, setFormState] = useState(preForm);
  const [preload, setPreload] = useState(false);

  useEffect(() => {
    libraries.source.api.get({
      endpoint: 'comments',
      params: { post: postId, _embed: false, per_page: 100 },
    })
      .then((response) => {
        response.json().then((data) => {
          setComments(data);
          setLoading(false);
        });
      });
  }, []);

  const validForm = () => {
    let error = true;
    const errorObj = {};
    Object.keys(formError).forEach((key) => {
      if (formState[key] === '' || formError[key]) {
        errorObj[key] = true;
        error = false;
      } else errorObj[key] = false;
    });
    setFormErrorState(errorObj);
    return error;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validForm()) {
      const formData = new FormData();
      formData.append('author_name', formState.author_name);
      formData.append('author_email', formState.author_email);
      formData.append('content', formState.content);
      formData.append('post', formState.post);

      actions.theme.sendComment({ formData });
      setFormErrorState(preErrors);
      setFormState(preForm);
      setPreload(true);
    }
  };

  const handleChangeInput = (e, key) => {
    const inputValue = e.target.value;
    const objJ = {};
    objJ[key] = inputValue;
    setFormState({ ...formState, ...objJ });

    const errorObj = {};
    const optional = false;

    if (inputValue.length < 2 && !optional) {
      errorObj[key] = true;
    } else {
      errorObj[key] = false;
    }
    setFormErrorState({ ...formError, ...errorObj });
  };

  return (
    <Container>
      <CommentsContainer>
        {loading && (<div>Loading...</div>)}
        {!loading && (
        <div>
          {comments.length === 0 && (<p>Comment not found</p>)}
          {comments.length > 0 && (
          <>
            {comments.map((item) => {
              const date = new Date(item.date);
              return (
                <SingleComment key={item.id}>
                  <Author>
                    By
                    {' '}
                    <b>{item.author_name}</b>
                  </Author>
                  <Fecha>
                    {' '}
                    on
                    {' '}
                    <b>{date.toDateString()}</b>
                  </Fecha>

                  <SingleCommentContent dangerouslySetInnerHTML={{
                    __html: item.content.rendered,
                  }}
                  />
                </SingleComment>
              );
            })}
          </>
          )}
        </div>
        )}
      </CommentsContainer>
      <Title>Leave a comment</Title>
      <Form
        onSubmit={submitForm}
        preloadNEW={state.customSettings.isSubscribeSend || false}
      >
        <Input
          name="author_name"
          placeholder="Name*"
          onChange={(e) => handleChangeInput(e, 'author_name')}
          value={formState.author_name}
        />
        <Input
          name="author_email"
          type="email"
          placeholder="Email*"
          onChange={(e) => handleChangeInput(e, 'author_email')}
          value={formState.author_email}
        />
        <TextArea
          name="content"
          placeholder="Message"
          onChange={(e) => handleChangeInput(e, 'content')}
          value={formState.content}
        />
        <Button type="submit">Send</Button>
      </Form>
      <RecaptchaText>
        This site is protected by reCAPTCHA and the Google
        {' '}
        <a target="_blank" href="https://policies.google.com/privacy">Privacy Policy</a>
        {' '}
        and
        {' '}
        <a target="_blank" href="https://policies.google.com/terms">Terms of Service</a>
        {' '}
        apply.
      </RecaptchaText>
      <CommentsSubmitText afterload={!!(preload && !state.customSettings.isCommentSend)}>Thank you for your feedback. After moderation, your comment will be published.</CommentsSubmitText>
    </Container>
  );
};

export default connect(CommentsForm);
