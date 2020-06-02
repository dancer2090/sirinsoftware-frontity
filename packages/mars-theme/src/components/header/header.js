import React from "react";
import {connect,styled} from "frontity";
import group_menu from '../header/img/group_menu.svg';
import logo from '../header/img/logo.svg';

import {
    HeadBlock,
    Header,
    Mobilemenu,
    Logo,
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
                <li><a href = {'#'}> RD Center </a></li>
                <li><a href = {'#'}> IT Staff \n Augmentation </a></li>
                </ul>
            </li>
            <li>
                <a href = {'#'}> CASE STUDIES </a>
                <ul className = 'sub-menu'>
                <li><a href = {'#'}> Linux, Embedded \n And Iot </a></li>
                <li><a href = {'#'}> IT Staff \n Augmentation </a></li>
                </ul>
            </li>
                <li><a href = {'#'}> CAREERS </a></li>
                <li><a href = {'#'}> BLOG </a></li>
            <li><a href = {'#'}> CONTACT US </a></li>
        </ul>
</Header>
</HeadBlock>

    );
        } 
export default connect(header);