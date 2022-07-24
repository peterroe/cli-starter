import { cac } from 'cac'
import pkg from '../package.json'
const cli = cac()

interface optionType { [k: string]: any }

cli.option('--type <type>', 'Choose a project type', { // demo usage
  default: 'node',
})

cli.option('--name <name>', 'Provide your name')

cli.command('lint [...args]', 'Lint files').action((args: Array<string>, options: optionType) => {
  console.log({ args, options })
})

cli.help()

cli.version(pkg.version)

cli.parse()
