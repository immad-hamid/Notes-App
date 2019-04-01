const chalk = require('chalk');
const yargs = require('yargs');
const log = console.log;

const add = require('./utils');
const getNotes = require('./notes');

yargs.version('1.1.0');

// adding notes
yargs.command({
    command: 'add',
    describe: 'Adding Notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => log(chalk.green.inverse(`\n${argv.title}\n\n${argv.body}`))
});

// remove notes
yargs.command({
    command: 'remove',
    describe: 'Remove Notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => log(chalk.red.inverse(`\n${argv.title}\n\n${argv.body}`))
});

// list notes
yargs.command({
    command: 'list',
    describe: 'List Notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => log(chalk.blue.inverse(`\n${argv.title}\n\n${argv.body}`))
});

// read notes
yargs.command({
    command: 'read',
    describe: 'Read Notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => log(chalk.white.inverse(`\n${argv.title}\n\n${argv.body}`))
});


yargs.parse();