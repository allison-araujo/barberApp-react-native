import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import Api from '../../Api';
import Barber from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';
import SignInput from '../../components/SignInput';
import UserContext from '../../contexts/UserContext';
import {
  Container,
  CustomButton,
  CustomButtonText,
  InputArea,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [nameField, setNameField] = useState('');

  const navigation = useNavigation();

  const handleSignClick = async () => {
    if (nameField !== '' && emailField !== '' && passwordField !== '') {
      let res = await Api.signUp(nameField, emailField, passwordField);
      if (res.token) {
        await AsyncStorage.setItem('token', res.token); //salvar token no asyncstore
        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: res.data.avatar,
          },
        });

        navigation.reset({routes: [{name: 'MainTab'}]});
      } else {
        alert('Erro: ' + res.error);
      }
    } else {
      alert('Prencha os campos');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <Barber width="100%" heigth="160" />
      <InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu Nome:"
          value={nameField}
          onChangeText={t => setNameField(t)}
        />
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu email:"
          value={emailField}
          onChangeText={t => setEmailField(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua Senha:"
          value={passwordField}
          onChangeText={t => setPasswordField(t)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
