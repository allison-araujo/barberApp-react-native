import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Plataform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
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
  const [coords, setCoords] = useState(null);

  const handleLocationFinder = async () => {
    setCoords(null);
    let result = await request(
      Plataform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );
    if (result === 'granted') {
      Geolocation.getCurrentPosition(info => {});
    }
  };

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
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#FFF" />
          </LocationFinder>
        </LocationArea>
      </Scroller>
    </Container>
  );
};
