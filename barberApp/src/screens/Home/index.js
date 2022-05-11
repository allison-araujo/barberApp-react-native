import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Plataform, RefreshControl} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import Api from '../../Api';
import MyLocationIcon from '../../assets/my_location.svg';
import SearchIcon from '../../assets/search.svg';
import BarberItem from '../../components/BarberItem/BarberItem';
import {
  Container,
  HeaderArea,
  HeaderTitle,
  ListArea,
  LoadingIcon,
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
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleLocationFinder = async () => {
    setCoords(null);
    let result = await request(
      Plataform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );
    if (result === 'granted') {
      setLoading(true);
      setLocationText('');
      setList([]);

      Geolocation.getCurrentPosition(info => {
        setCoords(info.coords);
        getListBarbers();
      });
    }
  };

  const getListBarbers = async () => {
    setLoading(true);
    setList([]);
    let lat = null;
    let lg = null;

    if (coords !== null) {
      lat = coords.latitude;
      lg = coords.longitude;
    }

    let res = Api.getListBarbers(lat, lg, locationText);

    if (res.error === '') {
      if (res.loc) {
        setLocationText(res.loc);
      }
      setList(res.data);
    } else {
      alert('Error:' + res.error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getListBarbers();
  });

  const onRefresh = () => {
    setRefreshing(false);
    getListBarbers();
  };

  const handleLocationSearch = () => {
    setCoords({});
    getListBarbers();
  };

  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
            onEndEditing={handleLocationSearch}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#FFF" />
          </LocationFinder>
        </LocationArea>

        {loading && <LoadingIcon size="large" color="#FFF" />}
        <ListArea>
          {list.map((item, key) => {
            <BarberItem key={key} data={item} />;
          })}
        </ListArea>
      </Scroller>
    </Container>
  );
};
