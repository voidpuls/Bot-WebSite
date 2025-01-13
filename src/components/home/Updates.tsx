import React from 'react';
import { Clock, Star, Zap, Shield, Bot, Music } from 'lucide-react';

const updates = [
  {
    version: "v1.0.6",
    date: "January 10, 2025",
    icon: Star,
    title: "January 2025 Update | Major Systems Upgrade",
    description: "Comprehensive update featuring multiple system improvements and new features",
    changes: [
      "1. Music System: Updated MusicCard, trackstart.js, nowplaying command, and added loop.js",
      "2. Booster System: Updates in booster.js and schemas",
      "3. Verification System: Enhanced Captcha Image generation",
      "4. IP Lookup Tool: Added new enhancements",
      "5. NSFW Filter: Implemented content filtering with rsnchat-filter",
      "6. AI System: Updated core functionality",
      "7. Mention Reply Feature: Improved response handling",
      "8. Playlist Feature (Paid Addon $3.99): Updated system and schema",
      "9. Pterodactyl Integration: Enhanced functionality",
      "10. 24/7 Mode: Implemented new features",
      "11. Ticket System: Updated ticketActions.js and related files",
      "12. AFK System: Added public role mention protection"
    ]
  },
  {
    version: "v1.0.5",
    date: "Dec 2, 2024",
    icon: Shield,
    title: "Update v1.0.5 ( December Update )",
    description: "Enhanced security features and performance improvements",
    changes: [
      "1. NSFW AI-Filter Used.",
      "2. Snipe Command Fixed",
      "3. Changes in help menu, suggestion system, welcome system, music system as requested.",
      "4. Few commands are added (ex: roleall, kickall).",
      "5. Major known bug fixes.",
      "6. Sharding System Added For Those Who Needed It.",
      "7. A Lot More...."
    ]
  },
  {
    version: "v1.0.3",
    date: "Oct 4, 2024",
    icon: Bot,
    title: "Major Update | Revamped Interface",
    description: "Initial release with core features and improved stability",
    changes: [
      "1. Distube Music System Switched To Lavalink Music System",
      "2. AI Chat System.",
      "3. Major Bug Fixes.",
      "4. New Economy And Ranking System.",
      "5. Hack Command.",
      "New Advanced Embed Creator",
      "7. A Lot More..."
    ]
  }
];

export function Updates() {
  return (
    <section id="updates" className="py-20 bg-black/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Latest Updates
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/20"></div>
          
          <div className="space-y-12">
            {updates.map((update, index) => {
              const Icon = update.icon;
              return (
                <div
                  key={update.version}
                  className="relative"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    <div className="w-1/2 flex justify-end">
                      <div className={`glass p-6 rounded-lg max-w-lg ${
                        index % 2 === 0 ? 'text-right' : 'text-left'
                      }`}>
                        <div className={`flex items-center gap-3 mb-4 ${
                          index % 2 === 0 ? 'justify-end' : 'justify-start'
                        }`}>
                          <span className="text-sm text-gray-400">{update.date}</span>
                          <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                            {update.version}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
                        <p className="text-gray-400 mb-4">{update.description}</p>
                        <ul className={`space-y-2 text-sm ${
                          index % 2 === 0 ? 'text-right' : 'text-left'
                        }`}>
                          {update.changes.map((change, i) => (
                            <li key={i} className="text-gray-300 flex items-center gap-2">
                              <Zap className="w-4 h-4 text-blue-500 flex-shrink-0" />
                              <span>{change}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="absolute w-8 h-8 bg-blue-500/20 rounded-full animate-ping"></div>
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
