const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const data = {
  name: chalk.white('                  Shaurya Vardhan Singh'),
  handle: chalk.white.bold('wulfor'),
  twitter: chalk.gray('https://twitter.com/') + chalk.red('wulforr'),
  github: chalk.gray('https://github.com/') + chalk.green('wulforr'),
  linkedin:
    chalk.gray('https://linkedin.com/in/') +
    chalk.blue('shaurya-vardhan-singh'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  descriptionLine1: chalk.white(
    'Hi, I am Shaurya a Software Developer with a knack for building things.'
  ),
  descriptionLine2: chalk.white(
    '     I created this tool for introducing myself in a fun way'
  ),
  descriptionLine3: chalk.white(
    '          Below are some links to get in touch with me'
  )
}

const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const descriptioningLine1 = `${data.descriptionLine1}`
const descriptioningLine2 = `${data.descriptionLine2}`
const descriptioningLine3 = `${data.descriptionLine3}`

const output =
  heading +
  newline +
  newline +
  descriptioningLine1 +
  newline +
  descriptioningLine2 +
  newline +
  descriptioningLine3 +
  newline +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.yellowBright(boxen(output, options))
)
