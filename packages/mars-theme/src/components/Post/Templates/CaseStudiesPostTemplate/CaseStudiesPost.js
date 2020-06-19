import React from 'react';
import { 
  ContainerFrame,
  Wrapper,
  FrameContent,
  BackLink,
  BackIcon,
  FrameTitle,
  Container,
  ClientBlock,
  ClientItem,
  ClientTitle,
  ClientDescription,
  ClientFrame,
  ContentWrapper,
  Content,
  PostsContent,
  PostTitle,
  Post,
  CardSet,
  Title,
  Text,
  BusinesCard
} from './styles';
import caseItemFrame from '../../../../img/case-item-post.jpg';
import logoCase from '../../../../img/logo-case.png';
import caseTextOne from '../../../../img/case-text-one.jpg';

const CaseStudiesPost = () => {
  return (
    <Wrapper>
      <ContainerFrame src={caseItemFrame}>
        <FrameContent>
          <BackLink>
            <BackIcon name="arrow-left" />
          </BackLink>
          <FrameTitle>
            IMPROVING CONNECTION STANDARDS FOR A NEW GENERATION
            OF CONSUMER SMARTWATCHES
          </FrameTitle>
        </FrameContent>
      </ContainerFrame>
      <Container>
        <ClientBlock>
          <ClientItem>
            <ClientTitle>
              Client
            </ClientTitle>
            <ClientFrame src={logoCase} />
          </ClientItem>
          <ClientItem>
            <ClientTitle>
              Business area
            </ClientTitle>
            <ClientDescription>
              Information technology and services
            </ClientDescription>
          </ClientItem>
          <ClientItem>
            <ClientTitle>
              Geography
            </ClientTitle>
            <ClientDescription>
              USA
            </ClientDescription>
          </ClientItem>
        </ClientBlock>

        <ContentWrapper>
          <Content>
            <CardSet title="Technology set" nameSvg="set-one" />
            <Title nameSvg="portfolio">
              Clients <br/>
              background
            </Title>
            
            <Text>
              The client works towards a safer future by manufacturing reliable, affordable, and easy-to-install wireless infrastructure for buildings. A multinational corporation based out of New York City, the company’s Tactical Series line of products operates at the nexus of two-way radio and fire-alarm systems, speaking the language of both. The company is FDNY ARCS B-03 certified, providing unmatched experience at getting installations for US FD by UL and FCC.
              <p>
                The company has a wide resellers network: Siemens Building Technologies, New York Fire Detection Inc, National Fire Products Inc, etc.
              </p>
            </Text>

            <BusinesCard></BusinesCard>

            <Title nameSvg="solution">
              Solution
            </Title>

            <Text>
              The client works towards a safer future by manufacturing reliable, affordable, and easy-to-install wireless infrastructure for buildings. A multinational corporation based out of New York City, the company’s Tactical Series line of products operates at the nexus of two-way radio and fire-alarm systems, speaking the language of both. The company is FDNY ARCS B-03 certified, providing unmatched experience at getting installations for US FD by UL and FCC.
              <p>
                The company has a wide resellers network: Siemens Building Technologies, New York Fire Detection Inc, National Fire Products Inc, etc.
              </p>
            </Text>

            <img src={caseTextOne} />
            
            <Text>
              The client works towards a safer future by manufacturing reliable, affordable, and easy-to-install wireless infrastructure for buildings. A multinational corporation based out of New York City, the company’s Tactical Series line of products operates at the nexus of two-way radio and fire-alarm systems, speaking the language of both. The company is FDNY ARCS B-03 certified, providing unmatched experience at getting installations for US FD by UL and FCC.
              <p>
                The company has a wide resellers network: Siemens Building Technologies, New York Fire Detection Inc, National Fire Products Inc, etc.
              </p>
            </Text>
            <CardSet title="Value delivered" nameSvg="set-two" />
          </Content>

          <PostsContent>
            <PostTitle>
              Linux, embedded and IOT
            </PostTitle>
            <Post title="IoT">
              IMPROVING CONNECTION STANDARDS FOR A NEW GENERATION OF CONSUMER SMARTWATCHES
            </Post>
            <Post title="Embedded Linux">
              AI DUAL DASH CAMERA FOR VEHICLES
            </Post>
            <Post title="SOFTWARE & HI-TECH">
              PROTECTED: CONTROLLED AIR SUPPLY SYSTEM OF HEATING- CONDITIONING FOR SMART HOUSES
            </Post>
            <Post title="SMART HOME">
              SMART PARKING SOLUTION WITH CLOUD, MOBILE APP AND WEB DASHBOARD
            </Post>
          </PostsContent>        
        </ContentWrapper>
      </Container>
    </Wrapper>
  )
}

export default CaseStudiesPost;
