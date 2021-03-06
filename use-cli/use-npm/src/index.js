#!/usr/bin/env node

const path = require('path');
const { promisify } = require('util');
const chalk = require('chalk');
const downloadGitRepo = require('download-git-repo');
const ora = require('ora');
const del = require('del');
const inquirer = require('inquirer');
const program = require('commander');

const getQuestions = require('./questions');
const copy = require('./copy');

const download = promisify(downloadGitRepo);

const { version } = require('../package.json');

program
  .version(version, '-v, --version')
  .command('init')
  .action(async () => {
    const questions = await getQuestions();
    const answers = await inquirer.prompt(questions);

    const downloadFolder = path.join(process.cwd(), '.tmp');
    del.sync([downloadFolder], { force: true });

    const spinner = ora({
      text: '...',
      'spinner': {
        'interval': 500,
        'frames': [
          '๐',
          '๐',
          '๐',
          '๐',
          '๐',
          '๐',
          '๐',
          '๐',
          '๐',
          '๐',
          '๐',
          '๐'
        ]
      },
    }).start();

    try {
      await download('direct:https://github.com/haoyinag/tt.git#template', downloadFolder, { clone: true });
      spinner.succeed(chalk.green('ๆจกๆฟไธ่ฝฝๆๅ๏ผ'));
    } catch (ex) {
      spinner.fail(chalk.red('ๆจกๆฟไธ่ฝฝๅคฑ่ดฅ๏ผ'));
      console.log(ex);
      return;
    }

    const source = `${downloadFolder}/**/*`;
    const dest = path.join(process.cwd(), answers.name);

    console.log(chalk.grey('\nๅคๅถๆไปถๅฐๆฌๅฐ'));
    await copy(source, dest, answers);
    del.sync([downloadFolder], { force: true });

    console.log(chalk.greenBright(`\n้กน็ฎๅๅปบๆๅ! ${chalk.bold(dest)}`));
  });

program.parse(process.argv);
