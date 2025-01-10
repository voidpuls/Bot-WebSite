import React from 'react';
import { Shield, Settings, Music, DollarSign, Wrench, Gift, Ticket, BarChart, MessageSquare, Gamepad, Image, Bot } from 'lucide-react';

const features = [
  {
    icon: Music,
    title: "MODERATION",
    description: "Powerful moderation tools with auto-mod capabilities"
  },
  {
    icon: Settings,
    title: "ADMIN TOOLS",
    description: "Fully customizable admin settings and configurations"
  },
  {
    icon: Music,
    title: "MUSIC",
    description: "High-quality audio playback for your server"
  },
  {
    icon: DollarSign,
    title: "ECONOMY",
    description: "Advanced economy system with ranking features"
  },
  {
    icon: Wrench,
    title: "UTILITIES",
    description: "Comprehensive toolkit for server management"
  },
  {
    icon: Gift,
    title: "GIVEAWAYS",
    description: "Run engaging giveaways for your community"
  },
  {
    icon: Ticket,
    title: "TICKETS",
    description: "Efficient support ticket system"
  },
  {
    icon: BarChart,
    title: "STATISTICS",
    description: "Track and display detailed server stats"
  },
  {
    icon: MessageSquare,
    title: "SUGGESTIONS",
    description: "Member feedback and suggestion system"
  },
  {
    icon: Gamepad,
    title: "FUN",
    description: "Entertaining commands and mini-games"
  },
  {
    icon: Image,
    title: "IMAGE TOOLS",
    description: "Creative image manipulation tools"
  },
  {
    icon: Bot,
    title: "AUTO SETUP",
    description: "Easy server setup and configuration"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-black/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Features
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="feature-icon text-blue-500 mb-4">
                {<feature.icon className="w-6 h-6" />}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}