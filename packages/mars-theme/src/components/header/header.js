import React from 'react';
import {connect,styled} from 'frontity';
import group_menu from '../header/img/group_menu.svg';
import logo from '../header/img/logo.svg';
import Button from '../button/Button';

import {
    FullHead,
    HeadBlock,
    Header,
    Mobilemenu,
    Logo,
    MobileButton,
    GetButton,
} from './styles';

const header = ({}) => {
    return (
<HeadBlock>
<Header>
        <Mobilemenu>
            <img src = {group_menu} alt = "Image" />
        </Mobilemenu>
        <Logo>
            <a href = {'#'}>
                <img src = {logo} alt = "Logo" />
            </a>
        </Logo>
        <ul className='menu'>
            <li>
                <a href = {'#'}> ABOUT US </a>
                <ul className = 'sub-menu'>
                <li> < a href = {'#'} > Profile </a></li>
                <li> < a href = {'#'} > Expertise </a></li>
                <li> < a href = {'#'} > Testimonials </a></li>
                <li> < a href = {'#'} > Team </a></li>
                <li> < a href = {'#'} > Faq </a></li>
                <li> < a href = {'#'} > Referral Program </a></li>
                </ul>
            </li>
            <li>
                <a href = {'#'}> <span> SERVICES </span></a>
                <ul className = 'sub-menu'>
                <li><a href = {'#'}> R&D Center</a></li>
                <li><a href = {'#'}> IT Staff <br/> Augmentation </a></li>
                </ul>
            </li>
            <li>
                <a href = {'#'}> CASE STUDIES </a>
                <ul className = 'sub-menu'>
                <li><a href = {'#'}> Linux, Embedded <br/> And Iot </a></li>
                <li><a href = {'#'}> IT Staff <br/> Augmentation </a></li>
                </ul>
            </li>
                <li><a href = {'#'}> CAREERS </a></li>
                <li><a href = {'#'}> BLOG </a></li>
                <li><a href = {'#'}> CONTACT US </a></li>
        </ul>
        <MobileButton>
            <a href={"#"}>GET A FREE QUOTE</a>
        </MobileButton>
        <GetButton>
            <Button>
                <a href={"#"}>GET A FREE QUOTE</a>
            </Button>
        </GetButton>
</Header>
</HeadBlock>
    );
        } 
export default connect(header);