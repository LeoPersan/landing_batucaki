import './style.css';
import Alpine from 'alpinejs';
import { generateQrCodeSvg } from './utils/qrcode.js';

window.Alpine = Alpine;

Alpine.data('panfletoController', () => ({
  isLightMode: false,
  landingPageUrl: 'https://bloco-batucaki.github.io/landing_batucaki/',
  instagramUrl: 'https://www.instagram.com/bloco.batucaki',
  qrCodeEventSvg: '',
  qrCodeInstagramSvg: '',

  init() {
    this.renderQrCodes();
  },

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
  },

  printFlyer() {
    window.print();
  },

  renderQrCodes() {
    this.qrCodeEventSvg = generateQrCodeSvg(this.landingPageUrl, {
      size: 140,
      color: '#000000',
      bgColor: '#ffffff'
    });

    this.qrCodeInstagramSvg = generateQrCodeSvg(this.instagramUrl, {
      size: 140,
      color: '#000000',
      bgColor: '#ffffff'
    });
  }
}));

Alpine.start();
