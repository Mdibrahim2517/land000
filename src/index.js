import ReactDOM from "react-dom/client";
// import * as serviceWorker from './serviceWorker';
// import 'assets/scss/style.scss';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// serviceWorker.unregister();
