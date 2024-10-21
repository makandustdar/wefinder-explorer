import stripTrailingSlash from 'lib/stripTrailingSlash';

import {getEnvValue} from './utils';

const apiHost = "37.27.130.143";
const apiSchema = getEnvValue('NEXT_PUBLIC_API_PROTOCOL') || 'https';
const apiPort = getEnvValue('NEXT_PUBLIC_API_PORT');
const apiEndpoint = "http://37.27.130.143";

const socketSchema = getEnvValue('NEXT_PUBLIC_API_WEBSOCKET_PROTOCOL') || 'wss';
const socketEndpoint = "wss://37.27.130.143";

const api = Object.freeze({
    host: apiHost,
    protocol: apiSchema,
    port: apiPort,
    endpoint: apiEndpoint,
    socket: socketEndpoint,
    basePath: stripTrailingSlash(getEnvValue('NEXT_PUBLIC_API_BASE_PATH') || ''),
});

export default api;