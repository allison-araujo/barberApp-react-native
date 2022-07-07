import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import Api from '../../Api';
import BackIcon from '../../assets/back.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';
import NavNextIcon from '../../assets/nav_next.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import BarberModal from '../../components/BarberModal';
import Starts from '../../components/Stars';
import {
  BackButton,
  Container,
  FakeSwiper,
  LoadingIcon,
  PageBody,
  Scroller,
  ServiceArea,
  ServiceChooseBtnText,
  ServiceChooseButton,
  ServiceInfo,
  ServiceItem,
  ServiceName,
  ServicePrice,
  ServicesTitle,
  SwipeDotActive,
  SwiperDot,
  SwiperImage,
  SwiperItem,
  TestimialArea,
  TestimonialBody,
  TestimonialInfo,
  TestimonialItem,
  TestimonialName,
  UserAvatar,
  UserFavButtom,
  UserInfo,
  UserInforArea,
  UserInforName,
} from './styles';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [userInfo, setUserInfor] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.start,
  });

  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);
      let json = await Api.getBarberListId(userInfo.id);
      if (json.error === '') {
        setUserInfor(json.data);
        setFavorited(json.data.favorited);
      } else {
        alert('error' + json.error);
      }
      setLoading(false);
    };
    getBarberInfo();
  }, [userInfo.id]);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handlFavClick = () => {
    setFavorited(!favorited);
    Api.setFavorite(userInfo.id);
  };

  const handleServiceChoose = key => {
    setSelectedService(key);
    setShowModal(true);
  };

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
            <UserFavButtom onPress={handlFavClick}>
              {favorited ? (
                <FavoriteFullIcon width="24" height="24" fill="#FFF000" />
              ) : (
                <FavoriteIcon width="24" height="24" fill="#FFF000" />
              )}
            </UserFavButtom>
          </UserInforArea>
          {loading && <LoadingIcon size="large" color="#0000000" />}
          {userInfo.services && (
            <ServiceArea>
              <ServicesTitle>Lista de Serviços</ServicesTitle>
              {userInfo.services.map((item, key) => (
                <ServiceItem key={key}>
                  <ServiceInfo>
                    <ServiceName>{item.name}</ServiceName>]
                    <ServicePrice>R$ {item.price}</ServicePrice>
                  </ServiceInfo>
                  <ServiceChooseButton onPress={() => handleServiceChoose(key)}>
                    <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
                  </ServiceChooseButton>
                </ServiceItem>
              ))}
            </ServiceArea>
          )}
          {userInfo.testimonials && userInfo.testimonials.length > 0 && (
            <TestimialArea>
              <Swiper
                style={{height: 110}}
                showsPagination={false}
                showsButtons={true}
                prevButton={
                  <NavPrevIcon width="35" height="35" fill="#000000" />
                }
                nextButton={
                  <NavNextIcon width="35" height="35" fill="#000000" />
                }>
                {userInfo.testimonials.map((item, key) => (
                  <TestimonialItem key={key}>
                    <TestimonialInfo>
                      <TestimonialName>{item.name}</TestimonialName>
                      <Starts stars={item.rate} showNumber={false} />
                      <TestimonialBody>{item.body}</TestimonialBody>
                    </TestimonialInfo>
                  </TestimonialItem>
                ))}
              </Swiper>
            </TestimialArea>
          )}
        </PageBody>
      </Scroller>
      <BackButton onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#FFFF" />
      </BackButton>
      <BarberModal
        show={showModal}
        setShow={setShowModal}
        user={userInfo}
        service={selectedService}
      />
    </Container>
  );
};
