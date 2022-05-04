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

export default ({state, navigation}) => {
  const goBack = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goBack('Home')}>
        <HomeIcon width="24" height="24" fill="#FFFF" />
      </TabItem>
      <TabItem onPress={() => goBack('Search')}>
        <SearchIcon width="24" height="24" fill="#FFFF" />
      </TabItem>
      <TabItem onPress={() => goBack('Appointments')}>
        <TodayIcon width="24" height="24" fill="#FFFF" />
      </TabItem>
      <TabItem onPress={() => goBack('Favorities')}>
        <FavoritiesIcon width="24" height="24" fill="#FFFF" />
      </TabItem>
      <TabItem onPress={() => goBack('Profile')}>
        <AccountIcon width="24" height="24" fill="#FFFF" />
      </TabItem>
    </TabArea>
  );
};
