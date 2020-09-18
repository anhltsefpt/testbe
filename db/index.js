'use strict'

const glob = require('glob')
const async = require('async')

async function main () {
    const files = glob.sync(`${__dirname}/migrations/*.js`).sort()
    await async.eachSeries(files, async (file) => {
        await require(`${file}`)()
    })
    console.log('Finish migrations')
}

main()