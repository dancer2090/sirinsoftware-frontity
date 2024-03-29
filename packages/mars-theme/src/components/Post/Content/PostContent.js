import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';
import StandartTemplate from '../Templates/StandartTemplate';
import MainTemplate from '../Templates/MainTemplate';
import ServicesTemplate from '../Templates/ServicesTemplate';
import AboutUsTemplate from '../Templates/AboutUsTemplate';
import ContactsTemplate from '../Templates/ContactsTemplate';
import CaseStudiesPost from '../Templates/CaseStudiesPostTemplate';
import FaqTemplate from '../Templates/FaqTemplate';
import FullPageTemplate from '../Templates/FullPageTemplate';
import BookTemplate from '../Templates/BookTemplate';
import OtherTempalate from '../Templates/OtherTemplate';
import ServiceItemTemplate from '../Templates/ServiceItemTemplate';
import ServiceItemNewTemplate from '../Templates/ServiceItemNewTemplate';
import WhyUs from '../Templates/WhyUs';
import PasswordProtected from '../../PasswordProtected';

const PostContent = ({ state, scrollRef = null }) => {
  const [checkPassword, setCheckPassword] = useState(1);
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];
  const template = (post.template !== '' ? post.template : 'standart');
  const { acf: acfGlobal = {} } = post;
  const { password = '' } = acfGlobal;


  const sendPassword = (value) => {
    setCheckPassword(1);
  };

  useEffect(() => {
    if (password === '') {
      setCheckPassword(1);
    } else {
      setCheckPassword(0);
    }
  }, []);
  return (
    <>
      {!checkPassword
        ? (
          <PasswordProtected submitForm={sendPassword} passwordOrigin={password} />
        ) : (
          <Switch>
            <MainTemplate scrollRef={scrollRef} when={state.router.link === '/'} />
            <CaseStudiesPost when={dataP.type === 'portfolio'} />
            <FaqTemplate when={template === 'page-faq.php'} />
            <StandartTemplate when={dataP.type === 'post' && template === 'standart' && state.router.link !== '/'} />
            <ServicesTemplate when={template === 'page-services-null.php'} />
            <ServiceItemNewTemplate
              scrollRef={scrollRef}
              when={
              post.slug === 'hardware_development'
              || post.slug === 'mechanical_engineering'
              || post.slug === 'mobile-application-development-services'
              || post.slug === 'embedded-software-development-services'
              || post.slug === 'web-development-services'
              || post.slug === 'cloud_solutions'
              || post.slug === 'iot-development'
              || post.slug === 'firmware_development'
              || post.parent === 4259
              || post.id === 5097
              || post.id === 5080
            }
            />
            <ServiceItemTemplate scrollRef={scrollRef} when={template === 'services.php'} />
            <FullPageTemplate when={template === 'page-full.php'} />
            <AboutUsTemplate when={template === 'about-us.php'} />
            <ContactsTemplate when={template === 'contacts.php'} />
            <BookTemplate when={template === 'page-book.php'} />
            <WhyUs when={template === 'page-why.php'} />
            <OtherTempalate />
          </Switch>
        )}
    </>
  );
};
export default connect(PostContent);
