import React, { useState, useEffect } from 'react';

import Routes from './routes';

import { getData, login } from './helpers';


const App = () => {
  const [user, setUser] = useState({ email: undefined });
  // const [data, setData] = useState({});
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
    }
    setLoading(false);
  };

  const callback = {
    user: {
      isAuthenticated: () => user.email !== undefined,
      login: async (email, password) => {
        const { error, response } = await login(email, password);
        if (response.status === 200) {
          setUser({
            email,
          });
        }
        return { error, response };
      },
      logout: () => {
        console.log('Fazer Logout');
      },
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
