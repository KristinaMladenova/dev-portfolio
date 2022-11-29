import './App.scss'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box className='header'><Box className='title'>
        <h2 className='h2'>welcome to lina.dev</h2>
        <h2 className='help'>?</h2>

      </Box>
    </Box><br></br><Box className='container'>
        <Grid
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg='tomato' />
          <GridItem colSpan={2} bg='papayawhip' />
          <GridItem colSpan={2} bg='papayawhip' />
          <GridItem colSpan={4} bg='tomato' />
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

export default App
