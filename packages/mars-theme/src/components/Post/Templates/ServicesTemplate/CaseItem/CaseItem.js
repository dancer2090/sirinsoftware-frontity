import React, { Fragment } from 'react';
import {
  CaseItemBlock,
  CaseLink,
  CaseItemTitle,
  CaseContent
} from './styles';


const CaseItem = ({ children, className, post_featured_image = '', acf = {}, item = {}, textBlock = false }) => {

  return (
    <CaseItemBlock 
      src={!textBlock ? 'https://admin.sirinsoftware.com/wp-content/uploads/2019/05/2019-05-16-16-46-45.jpg' : null}
      className={className}
      >
      { !textBlock 
        ? (
          <Fragment>
            <CaseItemTitle>
              IOT
            </CaseItemTitle>
            <CaseContent>
              Increasing the scalability of a cloud-based system for IoT products.
            </CaseContent>
          </Fragment>
        )
        : (
          <Fragment>
            { children }
          </Fragment>
        )
      }
      <CaseLink href="#">Learn more</CaseLink>
    </CaseItemBlock>
  )
}

export default CaseItem;