const path = require('path')
const fs = require('fs').promises
const shell = require('shelljs')
shell.config.silent = true

const omit = require('ramda/src/omit')
const scanPath = path.resolve(process.argv[2])
const destinationFile = path.resolve(__dirname, '../../static/tokei-example.json')

function extractFilesAndDirectories(tokeiResult) {
    const files = []
    const directories = new Map()
    /*
    [{
        dir: '.',
        children: [
            {
                dir: 'packages
            }
            
        ]
    }]
    */

    Object.entries(tokeiResult.inner).forEach(([fileType, fileTypeData]) => {
        fileTypeData.stats.forEach(file => {
            const fileName = file.name
            const parent = getParentDirectory(fileName)

            files.push({
                ...file,
                parent
            })
            directories.add(parent)
        })
    })
    return {
        files,
        directories: [...directories]
    }
}

function getParentDirectory(filePath) {
    return path.dirname(filePath)
}

function scanWithTokei(dir) {
    shell.cd(dir)
    const tokeiResult = shell.exec(`tokei -f -o json`)
    shell.cd('-')
    return JSON.parse(tokeiResult)
}

async function main() {
    const tokeiResult = scanWithTokei(scanPath)
    const result = extractFilesAndDirectories(tokeiResult)

    await fs.writeFile(destinationFile, JSON.stringify(result))
    console.log(`Tokei scanned and saved in ${destinationFile}`)
}



main()