import React, { useEffect, useState } from 'react';
import { Users, Server, Signal, Terminal, Layout, Code, Clock } from 'lucide-react';
import { BotInfo } from '../types/bot';
import { getBotInfo } from '../services/botService';
import { StatItem } from './stats/StatItem';

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
                    setStats({
                        totalUsers: info.totalUsers,
                        totalServers: info.totalServers,
                        ping: info.ping,
                        command: info.command,
                        channels: info.channels,
                        nodeVersion: info.nodeVersion,
                        uptime: info.uptime 
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
                value={stats.uptime} // Uses the updated formatUptime function
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
