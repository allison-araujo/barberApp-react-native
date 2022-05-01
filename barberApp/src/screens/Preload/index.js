import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import Api from '../../Api';
import Barber from '../../assets/barber.svg';
import UserContext from '../../contexts/UserContext';
import {Container, LoadingIcon} from './styles';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);

  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        //valiudar token
        let res = await Api.checkToken(token);

        if (res.token) {
          await AsyncStorage.setItem('token', res.token); //salvar token no asyncstore
          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: res.data.avatar,
            },
          });

          navigation.reset({routes: [{name: 'SignIn'}]});
        } else {
        }
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  });

  return (
    <Container>
      <Barber width="100%" height="160" />
      <LoadingIcon size="larger" color="#FFF" />
    </Container>
  );
};
