import React, { useState, useEffect } from 'react';

import Routes from './routes';

import { getData, login, logout } from './helpers';


const App = () => {
  const [user, setUser] = useState({ email: undefined });
  const [data, setData] = useState({
    today: [0, 0, 0],
    week: [0, 0, 0],
    month: [0, 0, 0],
  });
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);

  const init = async () => {
    const { error, response } = await getData();
    if (error) {
      if (response.status === 401) {
        setUser({
          email: undefined,
        });
      } else setErr(true);
    } else {
      setUser({
        email: 'MANDAR O EMAIL PELO COOKIES!',
      });
      setData(response.data);
    }
    setLoading(false);
  };

  const callback = {
    user: {
      isAuthenticated: () => user.email !== undefined,
      login: async (email, password) => {
        const { error, response } = await login(email, password);
        if (response.status === 200) {
          await init();
        }
        return { error, response };
      },
      logout: async () => {
        const { error } = await logout();
        if (!error) setUser({ email: undefined });
      },
    },
    data: {
      getData: () => data,
      refreshData: async () => { await init(); },
    },
  };

  useEffect(() => {
    init();
  }, []);

  if (err) return (<h3>ERROR!</h3>);
  return loading ? (
    <h3>Carregando</h3>
  ) : (
    <Routes callback={callback} />
  );
};


export default App;
