import React from "react"
import ReactDOM from 'react-dom/client'
import App from "./App"
import './styles/custom.css'

import 'bootstrap/dist/css/bootstrap.min.css'

const Main = () => {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)