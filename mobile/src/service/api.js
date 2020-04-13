import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * ios com Emulador: localhost
 * ios com fisico: IP da maquina
 * android com Emulador: localhost (adb reverse) // adb reverse tcp:3333 tcp:3333
 * android com Emulador: 10.0.2.2 (android studio)
 * android com Emulador: 10.0.2.2 (Genymotion)
 * android com fisíco: IP da maquina
 */