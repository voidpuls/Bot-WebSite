import React, { useEffect, useState } from 'react';
import { Users, Server, Signal, Terminal, Layout, Code, Clock } from 'lucide-react';
import { BotInfo } from '../types/bot';
import { getBotInfo } from '../services/botService';
import { StatItem } from './stats/StatItem';

// Utility function to format uptime
export function formatUptime(seconds) {
    if (seconds < 0) return "Error";

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let uptimeString = '';
    
    if (hours > 0) {
        uptimeString += `${hours}h `;
    }
    
    if (minutes > 0) {
        uptimeString += `${minutes}m `;
    }
    
    uptimeString += `${remainingSeconds}s`;

    return uptimeString.trim(); // Return the formatted uptime string
}

export function BotStats() {
    const [stats, setStats] = useState<BotInfo>({
        totalUsers: 15000,
        totalServers: 500,
        ping: 0,
        command: 0,
        channels: 0,
        nodeVersion: 'v18.20.5',
        uptime: 0 // Store uptime in seconds
    });

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        async function loadBotInfo() {
            try {
                setError(false);
                const info = await getBotInfo();

                if (mounted) {
                    const uptimeInSeconds = convertUptimeToSeconds(info.uptime);  // Parse uptime
                    setStats({
                        totalUsers: info.totalUsers,
                        totalServers: info.totalServers,
                        ping: info.ping,
                        command: info.command,
                        channels: info.channels,
                        nodeVersion: info.nodeVersion,
                        uptime: uptimeInSeconds // Store uptime in seconds
                    });
                }
            } catch (err) {
                if (mounted) {
                    setError(true);
                    console.error('Error fetching bot info:', err);
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }

        loadBotInfo();
        
        const interval = setInterval(loadBotInfo, 30000);

        return () => {
            mounted = false;
            clearInterval(interval);
        };
    }, []);

    // Function to convert uptime string to seconds
    const convertUptimeToSeconds = (uptimeString: string): number => {
        const timeParts = uptimeString.split(' ').reduce((acc, timePart) => {
            const value = parseInt(timePart);
            if (timePart.includes('h')) {
                acc += value * 3600; // Convert hours to seconds
            } else if (timePart.includes('m')) {
                acc += value * 60; // Convert minutes to seconds
            } else if (timePart.includes('s')) {
                acc += value; // Add seconds
            }
            return acc;
        }, 0);

        console.log('Converted uptime string:', uptimeString, 'to seconds:', timeParts); // Log conversion
        return timeParts;
    };

    return (
        <div className="space-y-2">
            <StatItem
                icon={Users}
                label="Total Users"
                value={stats.totalUsers.toLocaleString()}
                loading={loading}
                error={error}
            />
            <StatItem
                icon={Server}
                label="Total Servers"
                value={stats.totalServers.toLocaleString()}
                loading={loading}
                error={error}
            />
            <StatItem
                icon={Signal}
                label="Ping"
                value={`${stats.ping}ms`}
                loading={loading}
                error={error}
            />
            <StatItem
                icon={Terminal}
                label="Commands"
                value={stats.command.toLocaleString()}
                loading={loading}
                error={error}
            />
            <StatItem
                icon={Layout}
                label="Channels"
                value={stats.channels.toLocaleString()}
                loading={loading}
                error={error}
            />
            <StatItem
                icon={Clock}
                label="Uptime"
                value={formatUptime(stats.uptime)} // Uses the updated formatUptime function
                loading={loading}
                error={error}
            />
            <StatItem
                icon={Code}
                label="Node.js"
                value={stats.nodeVersion}
                loading={loading}
                error={error}
            />
        </div>
    );
}
