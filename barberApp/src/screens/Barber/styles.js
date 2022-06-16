import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffff;
`;

export const FakeSwiper = styled.View``;

export const PageBody = styled.View`
  background-color: #fff;
  border-top-left-radius: 50px;
  margin-top: -50px;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const UserInforArea = styled.View`
  flex-direction: row;
  margin-top: -30px;
`;

export const SwiperDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin: 3px;
`;

export const SwiperDotActive = styled.View`
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 5px;
  margin: 3 px;
`;

export const SwiperItem = styled.View`
  flex: 1;
  background-color: #63c2d1;
`;

export const SwiperImage = styled.Image`
  width: 100%;
  height: 240px;
`;

export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 30px;
  border-width: 4px;
  border-color: #ffff;
`;

export const UserInfoName = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const UserFavButtom = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #ffff;
  border: 2px solid #9999;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const TestimonialArea = styled.View``;

export const ServiceArea = styled.View``;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
`;
