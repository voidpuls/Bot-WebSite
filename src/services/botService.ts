import { BotInfo } from "../types/bot";
import { API_CONFIG } from "../config/api";
import { fetchWithTimeout } from "../utils/api";

const DEFAULT_BOT_INFO: BotInfo = {
  totalUsers: 15000,
  totalServers: 500,
  ping: 0,
  command: 0,
  channels: 0,
  nodeVersion: "v18.20.5",
  uptime: 0, // Default uptime in minutes
};

/**
 * Converts an uptime string (e.g., "0h 43m 57s") to milliseconds.
 */
function parseUptime(uptimeString: string): number {
  const hoursMatch = uptimeString.match(/(\d+)h/);
  const minutesMatch = uptimeString.match(/(\d+)m/);
  const secondsMatch = uptimeString.match(/(\d+)s/);

  const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
  const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;
  const seconds = secondsMatch ? parseInt(secondsMatch[1], 10) : 0;

  // Convert everything to milliseconds
  return (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
}

export async function getBotInfo(): Promise<BotInfo> {
  try {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.BOT_INFO}`;
    const response = await fetchWithTimeout(
      url,
      {
        method: "GET",
        headers: {
          ...API_CONFIG.DEFAULT_HEADERS,
          "Cache-Control": "no-cache",
        },
        mode: "cors",
      },
      3000
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      totalUsers: data.totalUsers ?? DEFAULT_BOT_INFO.totalUsers,
      totalServers: data.totalServers ?? DEFAULT_BOT_INFO.totalServers,
      ping: data.ping ?? DEFAULT_BOT_INFO.ping,
      command: data.command ?? DEFAULT_BOT_INFO.command,
      channels: data.channels ?? DEFAULT_BOT_INFO.channels,
      nodeVersion: data.nodeVersion ?? DEFAULT_BOT_INFO.nodeVersion,
      uptime: data.uptime ? parseUptime(data.uptime) : DEFAULT_BOT_INFO.uptime,
    };
  } catch (error) {
    console.warn("Error fetching bot info:", error);
    return DEFAULT_BOT_INFO;
  }
}
