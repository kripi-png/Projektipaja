import React from 'react';
import FrontPage from './components/frontPage';
import './style/css/index.css';
import './style/css/normalize.css';

function App() {
  console.log( "%chire me", 'font-weight: bold; font-size: 50px;color: red; text-shadow: -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000;' );
  console.log( "email: roopesini@gmail.com;\ngithub: https://github.com/kripi-png/;");
  return (
    <FrontPage />
  );
}

export default App;
