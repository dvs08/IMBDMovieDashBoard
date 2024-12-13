import React from 'react';
import 'normalize.css/normalize.css';
import './styles/movie.css';
//import '@innovaccer/design-system/css';
// import { createRoot } from 'react-dom/client';
import ReactDom from 'react-dom';
import Actors from './components/Actors';
import SearchAll from './components/SearchAll';
import Main from './components/Main';

// const App = () => <Main />;

// const root = createRoot(document.getElementById('app'));

// root.render(<App />);

const App = () => <Main />;

const root = document.getElementById('app');

ReactDom.render(<App /> , root);






