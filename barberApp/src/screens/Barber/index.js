import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import Api from '../../Api';
import FavoriteIcon from '../../assets/favorite.svg';
import Starts from '../../components/Stars';
import {
  Container,
  FakeSwiper,
  PageBody,
  Scroller,
  ServiceArea,
  SwipeDotActive,
  SwiperDot,
  SwiperImage,
  SwiperItem,
  TestimialArea,
  UserInforArea,
} from './styles';
export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(false);

  const [userInfo, setUserInfor] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.start,
  });

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);
      let json = await Api.getBarberListId(userInfo.id);
      if (json.error === '') {
        setUserInfor(json.data);
      } else {
        alert('error' + json.error);
      }
      setLoading(false);
    };
    getBarberInfo();
  }, [userInfo.id]);

  return (
    <Container>
      <Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swiper
            style={{height: 240}}
            dot={<SwiperDot />}
            activeDot={<SwipeDotActive />}
            paginationStyle={{
              top: 15,
              right: 15,
              bottom: null,
              left: null,
            }}
            autoplay={true}>
            {userInfo.photos.map((item, key) => (
              <SwiperItem key={key}>
                <SwiperImage source={{uri: item.url}} resizeMode="cover" />
              </SwiperItem>
            ))}
          </Swiper>
        ) : (
          <FakeSwiper></FakeSwiper>
        )}
        <PageBody>
          <UserInforArea>
            <UserAvatar source={{uri: userInfo.avatar}} />
            <UserInfo>
              <UserInforName>{userInfo.name}</UserInforName>
              <Starts stars={userInfo.starts} showAssess={true} />
            </UserInfo>
            <UserFavButtom>
              <FavoriteIcon width="24" height="24" fill="#FFF000" />
            </UserFavButtom>
          </UserInforArea>
          <ServiceArea></ServiceArea>
          <TestimialArea></TestimialArea>
        </PageBody>
      </Scroller>
    </Container>
  );
};
