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

const HeaderComponent = () => {

  const [isMenu, setMenu] = useState(false);
  const updateWidth = (width) => (width < 1000 ? null : setMenu(false));

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
              <li>
                <Link link="#"> ABOUT US </Link>
                <SubMenu>
                  <li>
                    <Link link="#"> Profile </Link>
                  </li>
                  <li>
                    <Link link="#"> Expertise </Link>
                  </li>
                  <li>
                    <Link link="#"> Testimonials </Link>
                  </li>
                  <li>
                    <Link link="#"> Team </Link>
                  </li>
                  <li>
                    <Link link="#"> Faq </Link>
                  </li>
                  <li>
                    <Link link="#"> Referral Program </Link>
                  </li>
                </SubMenu>
              </li>
              <li>
                <Link link="#">
                  SERVICES
                </Link>
                <SubMenu>
                  <li><Link link="#">R&D Center</Link></li>
                  <li>
                    <Link link="#">
                      IT Staff
                      <br />
                      Augmentation
                    </Link>
                  </li>
                </SubMenu>
              </li>
              <li>
                <Link link="#"> CASE STUDIES </Link>
                <SubMenu>
                  <li>
                    <Link link="#">
                      Linux, Embedded
                      <br />
                      And Iot
                    </Link>
                  </li>
                  <li>
                    <Link link="#">
                      IT Staff
                      <br />
                      Augmentation
                    </Link>
                  </li>
                </SubMenu>
              </li>
              <li><Link link="#"> CAREERS </Link></li>
              <li><Link link="#"> BLOG </Link></li>
              <li><Link link="#"> CONTACT US </Link></li>
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
                    <li>
                      <Link link="#"> ABOUT US </Link>
                      <SubMenu>
                        <li><Link link="#"> Profile </Link></li>
                        <li><Link link="#"> Expertise </Link></li>
                        <li><Link link="#"> Testimonials </Link></li>
                        <li><Link link="#"> Team </Link></li>
                        <li><Link link="#"> Faq </Link></li>
                        <li><Link link="#"> Referral Program </Link></li>
                      </SubMenu>
                    </li>
                    <li>
                      <Link link="#"> SERVICES </Link>
                      <SubMenu>
                        <li><Link link="#"> R&D Center </Link></li>
                        <li>
                          <Link link="#">
                            IT Staff
                            <br />
                            Augmentation
                          </Link>
                        </li>
                      </SubMenu>
                    </li>
                    <li>
                      <Link link="#"> CASE STUDIES </Link>
                      <SubMenu>
                        <li>
                          <Link link="#">
                            Linux, Embedded
                            <br />
                            And Iot
                          </Link>
                        </li>
                        <li>
                          <Link link="#">
                            IT Staff
                            <br />
                            Augmentation
                          </Link>
                        </li>
                      </SubMenu>
                    </li>
                    <li>
                      <Link link="#"> CAREERS </Link>
                    </li>
                    <li>
                      <Link link="#"> BLOG </Link>
                    </li>
                    <li><Link link="#"> CONTACT US </Link></li>
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
}
export default connect(HeaderComponent);
