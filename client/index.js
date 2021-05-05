import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain="dev-zipxfr0g.us.auth0.com"
      clientId="3aihuOf7l5QiXbtKjZ2hPOjUjFIyaqCB"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
