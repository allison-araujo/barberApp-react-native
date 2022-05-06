import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import MyLocationIcon from '../../assets/my_location.svg';
import SearchIcon from '../../assets/search.svg';
import {
  Container,
  HeaderArea,
  HeaderTitle,
  LocationArea,
  LocationFinder,
  LocationInput,
  Scroller,
  SearchButton,
} from './styles';

export default () => {
  const navigation = useNavigation();
  const [locationText, setLocationText] = useState();

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>Encontre sua barbearis</HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#FFF" />
          </SearchButton>
        </HeaderArea>
        <LocationArea>
          <LocationInput
            placeholder="Onde esta"
            placeholderTextColor="#FFF"
            value={locationText}
            onChangeText={t => setLocationText(t)}
          />
          <LocationFinder>
            <MyLocationIcon width="24" height="24" fill="#FFF" />
          </LocationFinder>
        </LocationArea>
      </Scroller>
    </Container>
  );
};
