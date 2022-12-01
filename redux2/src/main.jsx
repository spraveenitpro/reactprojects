import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './Counter'
import Toon from './Toon'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <Counter />
            <Toon />
        </Provider>
    </React.StrictMode>
)
