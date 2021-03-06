#!/usr/bin/env node
'use strict'

/*

  the main entry point of the client

  we process the command line arguments and call the relevent command

  the rest-api URL is checked 
  
*/

const yargs = require('yargs')

// import the handlers that will execute each command
const handlers = require('./handlers')

yargs
  .command({
    command: 'list',
    desc: 'List the current XO games',
    handler: handlers.listGames,
  })
  .command({
    command: 'create <name>',
    desc: 'Create a new XO game',
    handler: handlers.createGame,
  })
  .command({
    command: 'show <name>',
    desc: 'Display the current status of an XO game',
    handler: handlers.showGame,
  })
  .command({
    command: 'take <name> <space>',
    desc: 'Take a place in an existing XO game',
    handler: handlers.playGame,
  })
  .command({
    command: 'delete <name>',
    desc: 'Delete an existing XO game',
    handler: handlers.deleteGame,
  })
  .option('url', {
    describe: 'the url to connect to the rest api',
    default: process.env.URL,
  })
  .option('format', {
    describe: 'the format of the output (text, json)',
    default: 'text',
  })
  .option('key-dir', {
    describe: 'the directory to read the keys from',
    default: '/root/.sawtooth/keys',
  })
  .option('key-name', {
    describe: 'the name of the keys to use for submitting new transactions',
    default: 'root',
  })
  .demandCommand()
  .demandOption(['url'], 'Please provide a --url option (or URL env variable) to connect to the rest api')
  .help()
  .argv
