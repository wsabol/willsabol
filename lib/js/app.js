import React from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from './portfolio';

// style
import '../scss/app.scss'

document.addEventListener("DOMContentLoaded", function() {
    const root = createRoot(document.getElementById('root'));
    root.render(<Portfolio />);
});
