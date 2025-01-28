import React, { useEffect, useState } from 'react';
import { Users, Server, Signal, Terminal, Layout, Code, Clock } from 'lucide-react';
import { BotInfo } from '../types/bot';
import { getBotInfo } from '../services/botService';
import { StatItem } from './stats/StatItem';

// Utility function to format uptime from seconds to a human-readable string
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

    return uptimeString.trim();
}

export function BotStats() {
    const [stats, setStats] = useState<BotInfo>({
        totalUsers: 0,
        totalServers: 0,
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

                // Log the fetched info for debugging
                console.log('Fetched bot info:', info);

                if (mounted) {
                    const uptimeInSeconds = convertUptimeToSeconds(info.uptime); // Convert uptime string to seconds
                    setStats({
                        totalUsers: info.totalUsers,
                        totalServers: info.totalServers,
                        ping: info.ping,
                        command: info.command,
                        channels: info.channels,
                        nodeVersion: info.versnode, // Use the correct field name
                        uptime: uptimeInSeconds
                    });

                    // Log the updated stats
                    console.log('Updated bot stats:', {
                        totalUsers: info.totalUsers,
                        totalServers: info.totalServers,
                        ping: info.ping,
                        command: info.command,
                        channels: info.channels,
                        nodeVersion: info.versnode,
                        uptime: uptimeInSeconds,
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
        // Check if the uptimeString is valid
        if (!uptimeString || typeof uptimeString !== "string") {
            console.warn('Invalid uptime string:', uptimeString);
            return 0; // Return 0 or handle accordingly if the format is unexpected
        }

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

        console.log('Converted uptime string:', uptimeString, 'to seconds:', timeParts);
        return timeParts; // Return total seconds
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
                value={formatUptime(stats.uptime)} // Use the formatted uptime
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
