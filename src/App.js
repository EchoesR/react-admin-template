import React from 'react'
import { Provider } from 'react-redux'
import Router from '@/router'
import store from '@/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router/>
      </Provider>
    </div>
  );
}

export default App
