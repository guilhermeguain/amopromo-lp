import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import { Router } from '@routes/index'

import GlobalStyle from '@styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>,
)
