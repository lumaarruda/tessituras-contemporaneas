import React from 'react';
import { useHistory } from 'react-router-dom';

import video from '../../assets/video1.MOV';

import './style.css';

const Intro = () => {
  const history = useHistory();

  const handleSubmit = async () => {
      history.push('/sobre');
  };

  return (
    <div className="main-container-form">
      <video width="300px" autoplay="autoplay" loop>
        <source src={ video } type="video/mp4"/>
      </video>
        <div className="buttons">
          <button
            onClick={handleSubmit}
            type="button"
            className="login-button"
          >
            SOBRE TODAS AS COISAS
          </button>
        </div>
    </div>
  );
};

export default Intro;
