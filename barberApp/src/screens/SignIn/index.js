import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Api from '../../Api';
import Barber from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import SignInput from '../../components/SignInput';
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
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const navigation = useNavigation();

  const handleSignClick = async () => {
    if (emailField !== '' && passwordField !== '') {
      let json = await Api.signIn(emailField, passwordField);
      if (json.token) {
        alert('ok');
      } else {
        alert('Email e senha errados');
      }
    } else {
      alert('Preencha os campos!');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <Container>
      <Barber width="100%" heigth="160" />
      <InputArea>
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
          <CustomButtonText>Login</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda nao possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
