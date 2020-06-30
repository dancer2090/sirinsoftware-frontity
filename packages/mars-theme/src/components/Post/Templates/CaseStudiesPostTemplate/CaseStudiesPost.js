import React from 'react';
import { connect } from 'frontity';
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
  BusinesCard,
  CaseStudiesSlider,
  ContainerSlider,
  CaseItem,
  CaseLink,
  CaseItemTitle,
  CaseContent
} from './styles';

const CaseStudiesPost = ({ actions, state, libraries }) => {
  const data = state.source.get(state.router.link);
  const caseStudies = state.source.data['/case-studies/'];
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const slidesStudies = caseStudies.items.map(item => {
    return state.source[item.type][item.id];
  });

  const post = state.source[data.type][data.id];
  const { acf = {} } = post;

  const backLink = (event) => {
    event.preventDefault();

    actions.router.set('/case-studies/');
  }

  return (
    <Wrapper>
      <ContainerFrame src={acf.post_featured_image}>
        <FrameContent>
          <BackLink onClick={backLink} href="#">
            <BackIcon name="arrow-left" />
          </BackLink>
          <FrameTitle>
            <Html2React html={post.title.rendered}/>
          </FrameTitle>
        </FrameContent>
      </ContainerFrame>
      <Container>
        <ClientBlock>
          <ClientItem>
            <ClientTitle>
              Client
            </ClientTitle>
            <ClientDescription>
              <Html2React html={acf.portfolio_client_title}/>
            </ClientDescription>
          </ClientItem>
          <ClientItem>
            <ClientTitle>
              Business area
            </ClientTitle>
            <ClientDescription>
              <Html2React html={acf.portfolio_business_area}/>
            </ClientDescription>
          </ClientItem>
          <ClientItem>
            <ClientTitle>
              GEOGRAPHY
            </ClientTitle>
            <ClientDescription>
              <Html2React html={acf.portfolio_geography}/>
            </ClientDescription>
          </ClientItem>
        </ClientBlock>

        <ContentWrapper>
          <Content>
            <CardSet 
              title="Technology set" 
              nameSvg="set-one" 
              list={acf.embedded_linux_technology_list} />
            <Title nameSvg="portfolio">
              Clients <br/>
              background
            </Title>
            
            <Text>
              <Html2React html={acf.portfolio_client_background} />
            </Text>

            <BusinesCard>
              <Html2React html={acf.portfolio_business_challenge} />
            </BusinesCard>

            <Title nameSvg="solution">
              Solution
            </Title>

            <Text>
              <Html2React html={acf.portfolio_solution} />
            </Text>

            <CardSet 
              title="Value delivered" 
              nameSvg="set-two">
              <Html2React html={acf.portfolio_value_delivered} />
            </CardSet>
          </Content>

          <PostsContent>
            <PostTitle>
              Linux, embedded and IOT
            </PostTitle>
            <Post title="IoT" index="4">
              IMPROVING CONNECTION STANDARDS FOR A NEW GENERATION OF CONSUMER SMARTWATCHES
            </Post>
            <Post title="Embedded Linux" index="3">
              AI DUAL DASH CAMERA FOR VEHICLES
            </Post>
            <Post title="SOFTWARE & HI-TECH" index="2">
              PROTECTED: CONTROLLED AIR SUPPLY SYSTEM OF HEATING- CONDITIONING FOR SMART HOUSES
            </Post>
            <Post title="SMART HOME" index="1">
              SMART PARKING SOLUTION WITH CLOUD, MOBILE APP AND WEB DASHBOARD
            </Post>
          </PostsContent>        
        </ContentWrapper>

        <ContainerSlider>
          <CaseStudiesSlider>
            { slidesStudies.map((item, index) => {
                const { acf = {} } = item;
                const { post_featured_image = {} } = acf;
                return (
                  <CaseItem 
                    key={index}
                    src={post_featured_image}>
                    <CaseItemTitle>
                    <Html2React html={acf.portfolio_business_area} />
                    </CaseItemTitle>
                    <CaseContent>
                      <Html2React html={item.title.rendered} />
                    </CaseContent>
                    <CaseLink href={item.link}>Learn more</CaseLink>
                  </CaseItem>
                )
              })
            }
          </CaseStudiesSlider>
        </ContainerSlider>
      </Container>
    </Wrapper>
  )
}

export default connect(CaseStudiesPost);
