import React from 'react';
import Header from '../../components/Header';
import './styles.css';
import img1 from '../../assets/rascunho.png'
import img2 from '../../assets/fechado.jpeg'
import img3 from '../../assets/frente.jpeg'
import img4 from '../../assets/costas.jpeg'

const ClientProfile = () => {

  return (
    <div className="container">
      <Header />
      <h2 className="subtitle">Desenvolvimento</h2>
      <img src={ img1 } alt="imagem" className="image1" />
      <div className="image-flex">
        <img src={ img2 } alt="imagem" className="image-group" />
        <img src={ img3 } alt="imagem" className="image-group" />
        <img src={ img4 } alt="imagem" className="image-group" />
      </div>
    </div>
  );
};

export default ClientProfile;
