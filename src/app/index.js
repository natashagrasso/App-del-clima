import React from 'react';
import { createRoot, render } from 'react-dom';

/* use el createRoot porque daba un error de version de la api de react */

import './index.css';
import App from './App';

// Use createRoot en lugar de render    
const root = createRoot(document.getElementById('app'));

// Renderizo la app dentro del root
root.render(<App />);

/* render(
    <App/>,
    document.getElementById('app')
); */

//render(<App/>, document.getElementById('app')) //este componente lo va a montar en el index.html

