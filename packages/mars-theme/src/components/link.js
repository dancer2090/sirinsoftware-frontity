/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { connect } from 'frontity';

const Link = ({
  state,
  actions,
  link,
  className,
  itemProp,
  children,
  afterClick = () => { console.log('after click'); },
  'aria-current': ariaCurrent,
}) => {
  let newHrefLink = link;
  if(newHrefLink.charAt(newHrefLink.length - 1) !== '/' && newHrefLink.charAt(newHrefLink.length - 2) !== '/') newHrefLink = `${newHrefLink}/`;
  console.log(link);
  const onClick = (event) => {
    // Do nothing if it's an external link
    if (link.startsWith(state.frontity.url)) {
      event.preventDefault();
      let newLink = link.replace(state.frontity.url, '');
      if(newLink.charAt(newLink.length - 1) !== '/' && newLink.charAt(newLink.length - 2) !== '/') newLink = `${newLink}/`;
      actions.router.set(newLink);
    } else if (link.startsWith(state.frontity.adminUrl)) {
      event.preventDefault();
      let newLink = link.replace(state.frontity.adminUrl, '');
      if(newLink.charAt(newLink.length - 1) !== '/' && newLink.charAt(newLink.length - 2) !== '/') newLink = `${newLink}/`;
      actions.router.set(newLink);
    } else {
      if (link.startsWith('http')) return;
      event.preventDefault();
      // Set the router to the new url.
      let newLink = link;
      if(newLink.charAt(newLink.length - 1) !== '/' && newLink.charAt(newLink.length - 2) !== '/') newLink = `${newLink}/`;
      actions.router.set(newLink);
      // Scroll the page to the top
    }
    afterClick();
    window.scrollTo(0, 0);
  };

  return (
    <a
      href={newHrefLink}
      onClick={onClick}
      className={className}
      aria-current={ariaCurrent}
      itemProp={itemProp}
    >
      {children}
    </a>
  );
};

export default connect(Link);
