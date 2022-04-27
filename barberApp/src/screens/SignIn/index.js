import React from 'react';
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
  return (
    <Container>
      <Barber width="100%" heigth="160" />
      <InputArea>
        <SignInput IconSvg={EmailIcon} placeholder="Digite seu email:" />

        <SignInput IconSvg={LockIcon} placeholder="Digite sua Senha:" />

        <CustomButton>
          <CustomButtonText>Login</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton>
        <SignMessageButtonText>
          Ainda nao possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
