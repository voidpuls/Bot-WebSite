import { Command } from '../../types/commands';

/**
 * Economy Commands
 * @description A collection of commands for managing economy features.
 */
export const economyCommands: Command[] = [
  {
    name: '/balance',
    description: 'Coming soon: Check your current balance',
    usage: '/balance'
  },
  {
    name: '/bank deposit',
    description: 'Coming soon: Deposit money into your bank account',
    usage: '/bank deposit <amount>'
  },
  {
    name: '/bank withdraw',
    description: 'Coming soon: Withdraw money from your bank account',
    usage: '/bank withdraw <amount>'
  },
  {
    name: '/bank balance',
    description: 'Coming soon: Check your bank balance',
    usage: '/bank balance'
  },
  {
    name: '/beg',
    description: 'Coming soon: Beg for some coins',
    usage: '/beg'
  },
  {
    name: '/coinflip amount',
    description: 'Coming soon: Bet coins on a coinflip',
    usage: '/coinflip <amount>'
  },
  {
    name: '/coinflip side',
    description: 'Coming soon: Choose heads or tails',
    usage: '/coinflip <side>'
  },
  {
    name: '/daily',
    description: 'Coming soon: Claim your daily reward',
    usage: '/daily'
  },
  {
    name: '/delete-account',
    description: 'Coming soon: Delete your economy account',
    usage: '/delete-account'
  },
  {
    name: '/economy-admins addbalance',
    description: 'Coming soon: Add balance to a user',
    usage: '/economy-admins addbalance <user> <amount>',
    permissions: ['ADMINISTRATOR']
  },
  {
    name: '/economy-admins removebalance',
    description: 'Coming soon: Remove balance from a user',
    usage: '/economy-admins removebalance <user> <amount>',
    permissions: ['ADMINISTRATOR']
  },
  {
    name: '/give recipient',
    description: 'Coming soon: Give coins to another user',
    usage: '/give <recipient> <amount>'
  },
  {
    name: '/rob user',
    description: 'Coming soon: Attempt to rob another user',
    usage: '/rob <user>'
  },
  {
    name: '/slots coins',
    description: 'Coming soon: Play the slot machine',
    usage: '/slots <coins>'
  },
  {
    name: '/start',
    description: 'Coming soon: Start your economy account',
    usage: '/start'
  }
];