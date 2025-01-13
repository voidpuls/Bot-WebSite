export const API_CONFIG = {
  BASE_URL: 'https://api.slimecrew.org/',
  ENDPOINTS: {
    BOT_INFO: '/bot-info'
  },
  DEFAULT_HEADERS: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
} as const;
