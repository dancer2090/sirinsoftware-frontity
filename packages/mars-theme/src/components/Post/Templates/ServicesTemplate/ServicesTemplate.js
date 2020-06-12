import React from 'react';
import {
  Wrapper,
  Container,
  BigFrame,
  BigFrameImage,
  BigFrameContent,
  ServicesList,
  ServicesItem,
  CaseContainer,
  CaseTitle,
  CaseSlider,
  CaseItem,
  CaseLink,
  CaseItemTitle,
  CaseContent
} from './styles';
import ServiceFrameImage from '../../../../img/service.jpg';
import ItemImg from '../../../../img/item-service.jpg';
import ItemImgTwo from '../../../../img/service-two.jpg';
import caseImg from '../../../../img/case-one.jpg';
import caseImgTwo from '../../../../img/case-two.jpg';

const ServicesTemplate = () => {
  return (
    <Wrapper>
      <BigFrame>
        <BigFrameImage src={ServiceFrameImage} />
        <BigFrameContent>
          <div>
            Nam libero tempore, 
            cum soluta nobis est eligendi optio, 
            cumque nihil impedit, quo minus id, quod maxime placeat, f
            acere possimus, omnis voluptas assumenda est, omnis dolor 
            repellendus. Temporibus autem quibusdam et aut officiis debitis 
            aut rerum necessitatibus saepe eveniet, ut et voluptates 
            repudiandae sint et molestiae non recusandae.
          </div>
        </BigFrameContent>
      </BigFrame>
      <Container>
        <ServicesList>
          <ServicesItem src={ItemImg}>
            <h2>
              Software development
            </h2>
            <p>
              Nam libero tempore, cum 
              soluta nobis est eligendi optio, cumque nihil impedit,
              quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, 
              omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut 
              rerum necessitatibus saepe eveniet, 
              ut et voluptates repudiandae sint et molestiae non recusandae.
            </p>
          </ServicesItem>
          <ServicesItem 
            reverse={true} 
            color="yellow"
            src={ItemImgTwo}>
            <h2>
              Hardware development
            </h2>
            <p>
              Nam libero tempore, cum 
              soluta nobis est eligendi optio, cumque nihil impedit,
              quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, 
              omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut 
              rerum necessitatibus saepe eveniet, 
              ut et voluptates repudiandae sint et molestiae non recusandae.
            </p>
          </ServicesItem>
        </ServicesList>
        <CaseContainer>
          <CaseTitle data-text="case studies">
            <span>case studies</span>
          </CaseTitle>
          <CaseSlider>
            <CaseItem src={caseImg}>
              <CaseItemTitle>Other Case Studies</CaseItemTitle>
              <CaseContent>
                Wireless connection manager for IOT-
                Enabled consumer  electronics
              </CaseContent>
              <CaseLink>Learn more</CaseLink>
            </CaseItem>
            
            <CaseItem src={caseImgTwo}>
              <CaseItemTitle>Other Case Studies</CaseItemTitle>
              <CaseContent>
                Platform for petabyte scale backup and archive repositories
              </CaseContent>
              <CaseLink>Learn more</CaseLink>
            </CaseItem>
            
            <CaseItem src={caseImg}>
              <CaseItemTitle>Other Case Studies</CaseItemTitle>
              <CaseContent>
                Wireless connection manager for IOT-
                Enabled consumer  electronics
              </CaseContent>
              <CaseLink>Learn more</CaseLink>
            </CaseItem>
            
            <CaseItem src={caseImgTwo}>
              <CaseItemTitle>Other Case Studies</CaseItemTitle>
              <CaseContent>
                Platform for petabyte scale backup and archive repositories
              </CaseContent>
              <CaseLink>Learn more</CaseLink>
            </CaseItem>
          </CaseSlider>
        </CaseContainer>
      </Container>
    </Wrapper>
  )
}

export default ServicesTemplate;