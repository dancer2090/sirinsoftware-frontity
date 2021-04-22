import React, {useRef, useState, useEffect} from 'react';
import { getCookie, setCookie } from '../../utils/cookies';
import Link from '../link';
import {
  Container, 
  Content,
  Button,

} from './styles';

const UseCookiesModal = () => {
  const modal = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasCookie = getCookie('confirmCookie');

      if(hasCookie === undefined) {
        scrollPage(true);
      }
    return () => {
      window.removeEventListener('scroll', () => {});
    }
  }, []);

  const scrollPage = (params) => {
    const height = modal.current.offsetHeight;

    if(params) {
      window.addEventListener('scroll', function() {
        const hasCookie = getCookie('confirmCookie');

        if(hasCookie === undefined) {
          if(this.scrollY > height) {
            setShow(true);
          } else {
            setShow(false);
          }
        }
      })
    }
  }

  const setCookies = () => {
    setCookie('confirmCookie', true);
    setShow(false);
    window.removeEventListener('scroll', () => {});
  }

  return (
    <Container active={show} ref={modal}>
      <Content>
        <p>
          Sirin Software is updating its Privacy Policy on Jan 01, 2020. See the updated Privacy Policy <Link link="/privacy-policy">here</Link>.
        </p>
        <p>
          We use cookies to improve your experience with our site, including analytics and personalisation. 
          By continuing to use the service, you agree to our use of cookies as described in the Privacy Policy
        </p>
      </Content>

      <Button onClick={setCookies}>Ok</Button>
    </Container>
  )
}

export default UseCookiesModal;