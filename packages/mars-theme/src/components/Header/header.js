/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { connect } from 'frontity';
import ReactResizeDetector from 'react-resize-detector';
import groupMenu from '../../img/group_menu.svg';
import logo from '../../img/logo.svg';
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

const HeaderComponent = ({ state, libraries }) => {
  const [isMenu, setMenu] = useState(false);
  const updateWidth = (width) => (width < 1000 ? null : setMenu(false));
  const { main = {} } = state.theme.menu;
  const { items = [] } = main;
  const Html2React = libraries.html2react.Component;
  return (
    <ReactResizeDetector handleWidth onResize={updateWidth}>
      <HeadBlock isMenu={isMenu}>
        {!isMenu && (
          <Header>
            <Mobilemenu onClick={() => setMenu(true)}>
              <img src={groupMenu} alt="mobile menu" />
            </Mobilemenu>
            <Logo>
              <Link link="/">
                <img src={logo} alt="Logo" />
              </Link>
            </Logo>
            <Menu>
              {items && items.length > 0 && items.map((item, n) => (
                <li key={n}>
                  {item.child_items && item.child_items.length > 0 ? (
                    <>
                      <span>{item.title}</span>
                      <SubMenu>
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
              <Link link="#">GET A FREE QUOTE</Link>
            </MobileButton>
            <GetButton>
              <Link link="#">
                <Button>
                  GET A FREE QUOTE
                </Button>
              </Link>
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
                          <>
                            <span>{item.title}</span>
                            <SubMenu>
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
                </MobileTopMenu>
              </MobileOption>
              <MobileGetButton>
                <Link link="#">
                  <Button>
                    GET A FREE QUOTE
                  </Button>
                </Link>
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
