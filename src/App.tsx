import './App.scss';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import Notebook from './components/notebook';

function App() {

  return (
    <ChakraProvider>
      <Box className='body'>
        <Box className='main'>
          <Box className='header'>
            <Box className='title'>
              <h2 className='h2'>→  welcome to lina.dev</h2>
              <h2 className='help'>?</h2>
            </Box>
          </Box>

          <Notebook />

          <Box className='footer'>
            <Box className='title'>
              <h2 className='h2'>made with love&coffee</h2>
              <h2 className='h2'>'22</h2>
            </Box>
          </Box>
        </Box>
      </Box >

    </ChakraProvider >
  )
}

export default App
