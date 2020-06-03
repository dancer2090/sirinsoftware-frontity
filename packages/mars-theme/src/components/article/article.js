import React from 'react'
import { Container, Wrapper, ArticleLeft, Posts, PostTitle, PostItem,
        ArticleLeftHeader, Date, ArticleContent, SocialList,
    BigFrame } from './styles';
import Button from './button';
import SubscribeForm from './subscribe-form/subscribe-form';
import CommentsForm from './comments-form';
import Image from './static/image.jpg';

const Article = () => (
    <>
        <BigFrame image={Image}>
            <Container>NB-IoT – a Novel IoT Standard</Container>
        </BigFrame>
        <Container>
            <Wrapper>
                <ArticleLeft>
                    <ArticleLeftHeader>
                        <Button size="large">Business</Button>
                        <Date>APRIL.01.2020</Date>
                    </ArticleLeftHeader>
                    <ArticleContent>
                        <p>
                            The client works towards a safer future by manufacturing reliable, affordable, and easy-to-install wireless infrastructure for buildings. A multinational corporation based out of New York City, the company’s Tactical Series line of products operates at the nexus of two-way radio and fire-alarm systems, speaking the language of both. The company is FDNY ARCS B-03 certified, providing unmatched experience at getting installations for US FD by UL and FCC.
                        </p>
                        <p>
                            The company has a wide resellers network: Siemens Building Technologies, New York Fire Detection Inc, National Fire Products Inc, etc.
                        </p>
                        <h2>
                            AREAS WHERE SENSORS ARE USED
                        </h2>
                        <p>
                            The client works towards a safer future by manufacturing reliable, affordable, and easy-to-install wireless infrastructure for buildings. A multinational corporation based out of New York City, the company’s Tactical Series line of products operates at the nexus of two-way radio and fire-alarm systems, speaking the language of both. The company is FDNY ARCS B-03 certified, providing unmatched experience at getting installations for US FD by UL and FCC.
                        </p>
                        <p>
                            The company has a wide resellers network: Siemens Building Technologies, New York Fire Detection Inc, National Fire Products Inc, etc.
                        </p>
                        <h2>
                            AREAS WHERE SENSORS ARE USED
                        </h2>
                        <p>
                            The client works towards a safer future by manufacturing reliable, affordable, and easy-to-install wireless infrastructure for buildings. A multinational corporation based out of New York City, the company’s Tactical Series line of products operates at the nexus of two-way radio and fire-alarm systems, speaking the language of both. The company is FDNY ARCS B-03 certified, providing unmatched experience at getting installations for US FD by UL and FCC.
                        </p>
                        <p>
                            The company has a wide resellers network: Siemens Building Technologies, New York Fire Detection Inc, National Fire Products Inc, etc.
                        </p>
                    </ArticleContent>
                    <SocialList />
                    <CommentsForm />
                </ArticleLeft>
                <Posts>
                    <PostTitle>
                        Related posts
                    </PostTitle>
                    <PostItem>
                        Main reasons to invest in IoT
                    </PostItem>
                    <PostItem>
                        ARM SoC for server <br/> applications
                    </PostItem>

                    <SubscribeForm/>
                </Posts>
            </Wrapper>
        </Container>
    </>
)

export default Article;