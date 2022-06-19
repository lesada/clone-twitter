import React from 'react';

import {
  Container,
  Retweeted,
  RetweetedIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetedIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Lauren Leslie</strong>
            <span>@laurenleslie</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>
            Finalmente aprendendo React e Styled Components!
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              17
            </Status>

            <Status>
              <RetweetIcon />
              65
            </Status>

            <Status>
              <LikeIcon />
              147
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
