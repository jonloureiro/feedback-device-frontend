import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

import 'sanitize.css';
import 'sanitize.css/forms.css';

import { getData } from './services';

import './styles';


const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({ isAuthenticated: false });
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleData = async () => {
    const response = await getData();

    if (response.error) {
      if (response.data.status === 401) {
        setUser({
          isAuthenticated: false,
          email: undefined,
        });
      } else setError(true);
    } else {
      console.log(response);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleData();
  }, []);

  if (error) return <h3>ERROR!</h3>;
  return loading ? (
    <h3>Carregando</h3>
  ) : (
    <Routes user={{ user, setUser }} data={{ data, setData }} />
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
