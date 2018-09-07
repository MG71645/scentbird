import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Styles
import './reset.css'
import './index.css'

// Font Awesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {faQuestionCircle, faLock} from '@fortawesome/free-solid-svg-icons'
library.add(faQuestionCircle, faLock)

ReactDOM.render(<App />, document.getElementById('root'))
