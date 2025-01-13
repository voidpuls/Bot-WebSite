export const API_CONFIG = {
  BASE_URL: 'http://armando.hidencloud.com:25564',
  ENDPOINTS: {
    BOT_INFO: '/bot-info'
  },
  DEFAULT_HEADERS: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
} as const;
