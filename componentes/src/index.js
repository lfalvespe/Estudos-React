import ReactDom from 'react-dom/client'
import './index.css'
import App from './App'

const root = document.querySelector('#root')

ReactDom.createRoot(root).render(<App />)