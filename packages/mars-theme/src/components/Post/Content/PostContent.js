import React, { useEffect } from 'react';
import { connect } from 'frontity';
import StandartTemplate from '../Templates/StandartTemplate';
import MainTemplate from '../Templates/MainTemplate';
import ServicesTemplate from '../Templates/ServicesTemplate';
import PageFullTemplate from '../Templates/PageFullTemplate';
import AboutUsTemplate from '../Templates/AboutUsTemplate';
import ContactsTemplate from '../Templates/ContactsTemplate';
import CaseStudiesPost from '../Templates/CaseStudiesPostTemplate';
import FaqTemplate from '../Templates/FaqTemplate';
import FullPageTemplate from '../Templates/FullPageTemplate';
import BookTemplate from '../Templates/BookTemplate';
import ServiceItemTemplate from '../Templates/ServiceItemTemplate';
import Switch from '@frontity/components/switch';

const PostContent = ({ state, actions, scrollRef = null }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];
  const template = (post.template !== '' ? post.template : 'standart');

  // useEffect(() => {
  //   if(
  //     !state.router.link.indexOf('/services/')
  //     && state.router.link !== '/services/'
  //   ) {
  //     actions.router.set('/services/');
  //   }
  // }, []);

  return (
    <>
      <Switch>
        <MainTemplate scrollRef={scrollRef} when={state.router.link === '/'} />
        <CaseStudiesPost when={dataP.type === 'portfolio'} />
        <FaqTemplate when={template === 'page-faq.php'} />
        <StandartTemplate when={dataP.type === 'post' && template === 'standart' && state.router.link !== '/'} />
        <ServicesTemplate when={template === 'page-services-null.php'} />
        <ServiceItemTemplate when={template === 'services.php'} />
        <PageFullTemplate when={template === 'page-full.php'} />
        <AboutUsTemplate when={template === 'about-us.php'} />
        <ContactsTemplate when={template === 'contacts.php'} />
        <FullPageTemplate when={template === 'page-full.php'} />
        <BookTemplate when={template === 'page-book.php' } />
      </Switch>
    </>
  );
};
export default connect(PostContent);
