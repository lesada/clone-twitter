import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="Netflix" nickname="@netflix" />,
            <FollowSuggestion name="Spotify" nickname="@spotify" />,
            <FollowSuggestion name="Twitter" nickname="@twitter" />,
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
         <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
         <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
         <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
