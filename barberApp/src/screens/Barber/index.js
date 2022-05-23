import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import Api from '../../Api';
import {
  Container,
  FakeSwiper,
  PageBody,
  Scroller,
  ServiceArea,
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
          <Swiper></Swiper>
        ) : (
          <FakeSwiper></FakeSwiper>
        )}
        <PageBody>
          <UserInforArea></UserInforArea>
          <ServiceArea></ServiceArea>
          <TestimialArea></TestimialArea>
        </PageBody>
      </Scroller>
    </Container>
  );
};
