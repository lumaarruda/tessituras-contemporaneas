import React from 'react';

import Header from '../../components/Header';

import './styles.css';

const Sobre = () => {

  return (
    <div className="products-page">
      <Header />
      <h2 className="subtitle">Sobre</h2>
      <div className="text">
        <p>Existiu um tempo em que achei que fosse sustentada por corpos e pela aparencia das coisas que quase não importam mais.</p>
        <p>Mas tantas ainda importam e o mundo que carrego as vezes se torna tão grande, se torna maior que eu. Me toma.</p>
        <p>Ainda que me tome, é preciso respirar, encontrar meu espaço, me encontar e ser. Me ser. Entender as estruturas que me prendem e as que me sustentam. Entender tudo aquilo que não cresce maior que eu, mas que me faz crescer.</p>
        <p>Eu quero me misturar em mim, até que que a plenitude me alcance, até que eu possa ser uma só, em uma unica mistura de todas as cores, de luz.</p>
      </div>
    </div>
  );
};

export default Sobre;
