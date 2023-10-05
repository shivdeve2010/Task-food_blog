import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './components/Home';
import About from './components/About';
import Articles from './components/Articles';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
