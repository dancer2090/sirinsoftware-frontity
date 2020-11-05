/* eslint-disable quote-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'frontity';
import ReactResizeDetector from 'react-resize-detector';
import groupMenu from '../../img/group_menu.svg';
import logo from '../../img/logo.svg';
import logoWhite from '../../img/logo_white.svg';
import CrossImg from '../../img/cross.svg';
import Button from '../Button';
import Link from '../link';

import {
  HeadBlock,
  Header,
  Mobilemenu,
  Logo,
  MobileButton,
  GetButton,
  PopUpWindow,
  MobileBody,
  MobileOption,
  LogoBlock,
  MobileLogo,
  MobileTopMenu,
  MobileGetButton,
  CrossBlock,
  Cross,
  Menu,
  SubMenu,
} from './styles';
import Collapse from './Collapse';

const HeaderComponent = ({
  state,
  libraries,
  scrollRef = null,
  offset = 100,
  transparent = false,
}) => {
  const [isMenu, setMenu] = useState(false);
  const updateWidth = (width) => (width < 1000 ? null : setMenu(false));
  const { main = {} } = state.theme.menu;
  const { items = [] } = main;
  const Html2React = libraries.html2react.Component;
  const scrollToRef = () => {
    setMenu(false);
    if (scrollRef) {
      window.scrollTo({
        top: scrollRef.current.offsetTop - offset,
        left: 0,
        behavior: 'smooth',
      });
    }
    gtag('event', 'Click header action button', {
      'event_category': 'Click header action button',
    });
  };

  const [height, setHeight] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setHeight(ref.current.getBoundingClientRect().height);
  }, []);

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <ReactResizeDetector handleWidth onResize={updateWidth}>
      <HeadBlock transparent={!!((scrollTop < height && transparent))} isMenu={isMenu}>
        {!isMenu && (
          <Header transparent={!!((scrollTop < height && transparent))} ref={ref}>
            <Mobilemenu onClick={() => setMenu(true)}>
              <img src={groupMenu} alt="mobile menu" />
            </Mobilemenu>
            <Logo>
              <Link link="/">
                <img width="165" src={(scrollTop < height && transparent) ? logoWhite : logo} alt="Logo" />
              </Link>
            </Logo>
            <Menu transparent={!!((scrollTop < height && transparent))}>
              {items && items.length > 0 && items.map((item, n) => (
                <li key={n}>
                  {item.child_items && item.child_items.length > 0 ? (
                    <>
                      <span>{item.title}</span>
                      <SubMenu transparent={!!((scrollTop < height && transparent))}>
                        {item.child_items.map((cItem, cn) => (
                          <li key={cn}>
                            <Link link={cItem.urlFrontity}>
                              <Html2React html={cItem.title} />
                            </Link>
                          </li>
                        ))}
                      </SubMenu>
                    </>
                  ) : (
                    <Link link={item.urlFrontity}><Html2React html={item.title} /></Link>
                  )}
                </li>
              ))}
            </Menu>
            <MobileButton>
              <a href="#" onClick={() => scrollToRef()}>GET A FREE QUOTE</a>
            </MobileButton>
            <GetButton transparent={!!((scrollTop < height && transparent))}>
              <Button>
                <a href="#" onClick={() => scrollToRef()}> GET A FREE QUOTE</a>
              </Button>
            </GetButton>
          </Header>
        )}
        {isMenu && (
          <PopUpWindow>
            <MobileBody>
              <MobileOption>
                <LogoBlock>
                  <MobileLogo>
                    <Link link="/"><img src={logo} alt="Logo" /></Link>
                  </MobileLogo>
                </LogoBlock>
                <MobileTopMenu>
                  <Menu isMenu>
                    {items && items.length > 0 && items.map((item, n) => (
                      <li key={n}>
                        {item.child_items && item.child_items.length > 0 ? (
                          <Collapse title={item.title}>
                            <SubMenu>
                              {item.child_items.map((cItem, cn) => (
                                <li key={cn}>
                                  <Link afterClick={() => setMenu(false)} link={cItem.urlFrontity}>
                                    <Html2React html={cItem.title} />
                                  </Link>
                                </li>
                              ))}
                            </SubMenu>
                          </Collapse>
                        ) : (
                          <Link afterClick={() => setMenu(false)} link={item.urlFrontity}>
                            <Html2React html={item.title} />
                          </Link>
                        )}
                      </li>
                    ))}
                  </Menu>
                </MobileTopMenu>
              </MobileOption>
              <MobileGetButton>
                <a>
                  <Button onClick={() => scrollToRef()}>
                    GET A FREE QUOTE
                  </Button>
                </a>
              </MobileGetButton>
            </MobileBody>
            <CrossBlock>
              <Cross onClick={() => setMenu(false)}>
                <img src={CrossImg} alt="cross" />
              </Cross>
            </CrossBlock>
          </PopUpWindow>
        )}
      </HeadBlock>
    </ReactResizeDetector>
  );
};
export default connect(HeaderComponent);
