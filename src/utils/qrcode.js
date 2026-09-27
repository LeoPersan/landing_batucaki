import QRCode from 'qrcode';

/**
 * Gera um elemento SVG com QR Code vetorial síncrono ou com opções personalizadas
 */
export function generateQrCodeSvg(text, options = {}) {
  const size = options.size || 200;
  const darkColor = options.color || '#000000';
  const lightColor = options.bgColor || '#ffffff';

  let svgString = '';
  
  QRCode.toString(text, {
    type: 'svg',
    width: size,
    margin: 1,
    color: {
      dark: darkColor,
      light: lightColor
    }
  }, (err, string) => {
    if (err) throw err;
    svgString = string;
  });

  return svgString;
}
