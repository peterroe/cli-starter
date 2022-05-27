import { cac } from 'cac'
import pkg from '../package.json'
const cli = cac()

cli.option('--type <type>', 'Choose a project type', {
  default: 'node',
})

cli.option('--name <name>', 'Provide your name')

cli.command('lint [...files]', 'Lint files').action((files, options) => {
  console.log(files, options)
})

cli.help()

cli.version(pkg.version)

cli.parse()
