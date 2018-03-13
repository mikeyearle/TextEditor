import React from 'react';
import { render } from 'react-dom';
import App from '../components/app';
import './style.css';
import 'github-markdown-css/github-markdown.css';

render(<App />, document.getElementById('app'));