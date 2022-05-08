import React from 'react';
import styled from 'styled-components/native';

const Area = styled.TouchableOpacity``;

const Avatar = styled.Image``;

const InfoArea = styled.View``;

const UserName = styled.Text``;

const SeeProfileButton = styled.View``;

const SeeProfileButtonText = styled.Text``;

export default ({data}) => {
  return (
    <Area>
      <Avatar source={{uri: data.avatar}} />
      <InfoArea>
        <UserName>{data.name}</UserName>

        <SeeProfileButton>
          <SeeProfileButtonText>Ver perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};
