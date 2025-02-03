import './style.css'
import Alpine from 'alpinejs';
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
}));
Alpine.start()