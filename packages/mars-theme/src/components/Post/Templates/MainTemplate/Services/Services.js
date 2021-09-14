import {
  ServicesGlobalContainer,
  ServicesList,
  ServicesItem,
  ServicesItemTitle,
  ServicesTitle,
  ServicesWrapper,
  ServicesBack,
  ServicesBackTitle,
  ServicesBackText,
  ServicesLink,
} from 'styles';


const Services = ({ services }) => (
  <ServicesGlobalContainer>
    <ServicesTitle title="Services" />
    <Container>
      <ServicesList>
        {services && services.map((service, k) => {
          const {
            bg = { url: '' },
            link = ''
          } = service;
          const serviceBackground = imageUrlCheck(bg.url, urlsWithLocal);
          return (
            <ServicesWrapper>
              <ServicesItem bg={serviceBackground} link={link} key={`${serviceBackground}_${k}`}>
                <ServicesItemTitle>{service.title}</ServicesItemTitle>
              </ServicesItem>
              <ServicesBack>
                <ServicesBackTitle link={link}>{service.title}</ServicesBackTitle>
                <ServicesBackText>{service.text}</ServicesBackText>
                <ServicesLink link={link}>Learn more</ServicesLink>
              </ServicesBack>
            </ServicesWrapper>
          );
        })}
      </ServicesList>
    </Container>
  </ServicesGlobalContainer>
);

export default Services;
