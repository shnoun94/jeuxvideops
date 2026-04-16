const canvas = document.createElement('canvas');
Object.defineProperty(window, 'canvas', {value: 800});
Object.defineProperty(document, 'canvas', {value: 800});
document.body.appendChild(canvas);