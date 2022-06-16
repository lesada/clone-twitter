import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>Lauren Leslie</h1>
        <h2>@lesada</h2>

        <p>Front-End Developer. Learning React as I code.</p>

        <ul>
          <li>
            <LocationIcon />
            Rio Grande do Sul, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 17 de janeiro de 2002
          </li>
        </ul>

        <Followage>
          <span>
            <strong>257 </strong>Seguindo
          </span>
          <span>
            <strong>658 </strong>Seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
