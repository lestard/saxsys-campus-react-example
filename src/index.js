import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import createStore from './createStore'

const initialState = {
    items: []
}

const store = createStore(initialState)

const renderApp = () => {
    ReactDOM.render(
        <App items={store.getState().items} dispatch={store.dispatch}/>
        , document.getElementById("app")
    )
}

renderApp()

store.subscribe(() => {
    renderApp()
})
