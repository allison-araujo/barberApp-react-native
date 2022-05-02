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

export default () => {
  return (
    <TabArea>
      <TabItem>
        <HomeIcon width="24" height="24" fill="#FFFF" />
      </TabItem>
      <TabItem>
        <SearchIcon width="24" height="24" fill="#FFFF" />
      </TabItem>
      <TabItem>
        <TodayIcon width="24" height="24" fill="#FFFF" />
      </TabItem>
      <TabItem>
        <FavoritiesIcon width="24" height="24" fill="#FFFF" />
      </TabItem>
      <TabItem>
        <AccountIcon width="24" height="24" fill="#FFFF" />
      </TabItem>
    </TabArea>
  );
};
