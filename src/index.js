import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    console.log('test');
    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());

