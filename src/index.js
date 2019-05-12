import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'

import App from './components/app'

import store from './config/store'

import GlobalStyle from './design/global_style'
import theme from './design/theme'

const root = document.getElementById('root')
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </ThemeProvider>,
    root
)