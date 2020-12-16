import React from 'react';

import Header from '../../components/Header';
import video2 from '../../assets/video2.mov';


import './styles.css';

const MyOrdereds = () => {

  return (
    <div>
      <Header />
      <video width="800px" controls className="video2">
        <source src={ video2 } type="video/mp4"/>
      </video>
    </div>
  );
};

export default MyOrdereds;
