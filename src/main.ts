import './style.css'
import Alpine from 'alpinejs';
import { foo } from '@johntao/dummy1';
import logo from './typescript.svg';

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

window.Alpine = Alpine;
Alpine.data('cnt', () => ({
  count: 0,
  logo,
  foo() {
    this.msg = foo();
  },
  msg: 'Hello Alpine.js!',
}));
Alpine.start()