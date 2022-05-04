import React from 'react';
import styled from 'styled-components';
import AccountIcon from '../../assets/account.svg';
import FavoritiesIcon from '../../assets/favorities.svg';
import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';

const TabArea = styled.View`
  height: 60px;
  background-color: #4eadbe;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 3px solid #4eadbe;
  margin-top: -20px;
`;

export default ({state, navigation}) => {
  const goBack = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goBack('Home')}>
        <HomeIcon
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFF"
        />
      </TabItem>
      <TabItem onPress={() => goBack('Search')}>
        <SearchIcon
          style={{opacity: state.index === 1 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFF"
        />
      </TabItem>
      <TabItemCenter onPress={() => goBack('Appointments')}>
        <TodayIcon width="32" height="32" fill="#4EADBE" />
      </TabItemCenter>
      <TabItem onPress={() => goBack('Favorities')}>
        <FavoritiesIcon
          style={{opacity: state.index === 3 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFF"
        />
      </TabItem>
      <TabItem onPress={() => goBack('Profile')}>
        <AccountIcon
          style={{opacity: state.index === 4 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFF"
        />
      </TabItem>
    </TabArea>
  );
};
