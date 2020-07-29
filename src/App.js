import React from 'react';
import Menu from './components/menu';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import BannerMain from './components/BannerMain';
import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
      <div style={{background: "#4B0082" }}>
      <Menu />
      <BannerMain 
      vídeoTitle={dadosIniciais.categorias[0].videos[0].título}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"o leerel"}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[2]}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[3]}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[4]}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[5]}
      />
    
      <Footer 
      
      />

    </div>
  );
}

export default App;
