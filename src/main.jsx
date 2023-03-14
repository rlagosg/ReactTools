import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormWithCustomHook } from './components/FormWithCustomHook'
import { MultipleCustomHooks } from './components/MultipleCustomHooks'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FormWithCustomHook />
    // <MultipleCustomHooks />  
  // </React.StrictMode>,
)
