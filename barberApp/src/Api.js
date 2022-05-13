const BASE_API = 'https://api.b7web.com.br/devbarber/api';
import AsyncStorage from '@react-native-community/async-storage';

export default {
  checkToken: async token => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token}),
    });

    const json = await req.json();
    return json;
  },

  signIn: async (email, password) => {
    const req = await fetch(`${BASE_API}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });

    const json = await req.json();
    return json;
  },

  signUp: async (name, email, password) => {
    const req = await fetch(`${BASE_API}/user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password}),
    });

    const json = await req.json();
    return json;
  },

  logout: async () => {
    const token = await AsyncStorage.getItem('token');

    const req = await fetch(`${BASE_API}/auth/logout`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    const json = await req.json({token});
    return json;
  },

  getListBarbersAll: async (lat = null, lg = null, address = null) => {
    const token = await AsyncStorage.getItem('token');
    const req = await fetch(
      `{BASE_API}/barbers?token=${token}&lat=${lat}&lg=${lg}&address=${address}`,
    );
    const json = await req.json();
    return json;
  },

  getBarberListId: async id => {
    const token = await AsyncStorage.getItem('token');
    const req = await fetch(`{BASE_API}/barber/${id}?token=${token}`);
    const json = await req.json();
    return json;
  },
};
