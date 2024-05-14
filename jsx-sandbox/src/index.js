// 1) Import React (it knows what a component is) and ReactDOM (it knows how a component works in a browser) libraries

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

// 2) Get the reference to the div with ID root

const element = document.getElementById('root');

// 3) Tell React to take control of that element

const root = ReactDOM.createRoot(element);

// 4) Create a component (it's in a separate file already)

// 5) Show the component on the screen
root.render(<App />);
