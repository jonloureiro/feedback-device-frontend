import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

import 'sanitize.css';
import 'sanitize.css/forms.css';

import './styles';


const App = () => <Routes />;


ReactDOM.render(<App />, document.getElementById('root'));
