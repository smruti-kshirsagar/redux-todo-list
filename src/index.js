import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './components/ToDoApp';
import {Provider} from 'react-redux'
import store from './redux/store/store'

ReactDOM.render(<Provider store={store}><ToDoApp /></Provider>, document.getElementById('root'));

