import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ModalContextProvider from './services/modalContext';
import ThanksContextProvider from './services/contextThanks';


ReactDOM.render(
    <ModalContextProvider>
        <ThanksContextProvider>
            <App />
        </ThanksContextProvider>
    </ModalContextProvider>,
    document.getElementById('root')
);

