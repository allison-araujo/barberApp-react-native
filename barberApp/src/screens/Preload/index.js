import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import Barber from '../../assets/barber.svg';
import {Container, LoadingIcon} from './styles';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        //valiudar token
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <Barber width="100%" height="160" />
      <LoadingIcon size="larger" color="#FFF" />
    </Container>
  );
};
