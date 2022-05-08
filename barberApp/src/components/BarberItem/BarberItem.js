import React from 'react';
import styled from 'styled-components/native';

const Area = styled.TouchableOpacity`
  background-color: #ffff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

const Avatar = styled.Image`
  margin-left: 20px;
  justify-content: space-between;
`;

const InfoArea = styled.View``;

const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

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
