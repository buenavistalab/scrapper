import React from 'react';
import { Container } from './styles/styles';

import Header from './components/Header';
import ProductsGrid from './components/ProductsGrid';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Header />
      <ProductsGrid />
      <Footer />
    </Container>
  );
}

export default App;
