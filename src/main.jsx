import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { indexRoutes } from './Routes'
import Theme from './assets/Theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    { localStorage.setItem('chakra-ui-color-mode', 'dark') }
    <ChakraProvider theme={ Theme }>
      <RouterProvider router={ indexRoutes } />
    </ChakraProvider>
  </React.StrictMode>,
)
