// eslint-disable-next-line @typescript-eslint/no-var-requires
const arg = require('arg')
const args = parseArgs(process.argv)
const spec = 'src/tests/**/*.spec.ts'

function createGrep(args = {}) {
    let tagExp = ''
    let notTagExp = ''
    let usingTags = false
    let onlyNegative = false
    if (args['--tags']) {
        const tagged = args['--tags'].replaceAll(',', '|')
        tagExp = `.*?(${tagged})`
        usingTags = true
    }
    if (args['--excludeTags']) {
        const excludeTags = args['--excludeTags'].replaceAll(',', '|')
        notTagExp = `(?!(.*(${excludeTags})))`
        if (!usingTags) {
            onlyNegative = true
        }
        usingTags = true
    }
    const expression = usingTags
        ? `${onlyNegative ? '^(?!.*@)|' : ''}@${notTagExp}${tagExp}`
        : '.*'
    return expression
}

function parseArgs(argv) {
    const args = arg(
        {
            '--tags': String,
            '--excludeTags': String,
        },
        { argv, permissive: true },
    )
    ;['--tags', '--excludeTags'].forEach((option) => {
        if (!args[option]) {
            args[option] = ''
        }
    })
    return args
}

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

module.exports = {
    extension: ['ts'],
    require: ['mochawesome/register.js'],
    loader: 'ts-node/esm',
    spec: spec,
    timeout: 100000,
    grep: createGrep(args),
    reporter: 'mochawesome',
    reporterOption: [
        `reportFilename=${
            isGitHubActions
                ? 'Country-Service-report'
                : '[status]_[datetime]-[name]-report'
        },reportDir=reports,reportTitle=Country Report,reportPageTitle=Country Report,charts=true,code=true,inline=true,overwrite=true,enableCharts=true,enableCode=true`,
    ],
}
