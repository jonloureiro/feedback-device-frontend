import React, { useState, useEffect } from 'react';

import Routes from './routes';

import { getData } from './helpers';


const App = () => {
  const [user, setUser] = useState({ isAuthenticated: false, email: undefined });
  const [data, setData] = useState({});
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleData = async () => {
    const { error, response } = await getData();

    if (error) {
      if (response.status === 401) {
        setUser({
          isAuthenticated: false,
          email: undefined,
        });
      } else setErr(true);
    } else {
      setUser({
        isAuthenticated: true,
        email: undefined,
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    handleData();
  }, []);

  if (err) return (<h3>ERROR!</h3>);
  return loading ? (
    <h3>Carregando</h3>
  ) : (
    <Routes user={{ user, setUser }} data={{ data, setData }} />
  );
};


export default App;
