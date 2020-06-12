import React from 'react';
import {
  Global, connect, Head,
} from 'frontity';
import Switch from '@frontity/components/switch';
import Header from './Header';
import Footer from './Footer';
import List from './list';
import Post from './post';
import Loader from './Loader';
import Title from './title';
import PageError from './page-error';
import { Space, globalStyles, Main } from './globalStyles';
import FeedbackForm from './FeedbackForm';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  console.log(state);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's.
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site.  */}
      <Header />
      <Space />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}

      <Main>
        <Switch>
          <Loader when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <FeedbackForm />
      <Footer />
    </>
  );
};

export default connect(Theme);
