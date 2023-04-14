import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {DataLayer} from './Utils/DataLayer'
import {reducer,  initialState } from './Utils/Reducer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
    <App />

    </DataLayer>
  </React.StrictMode>,
)
