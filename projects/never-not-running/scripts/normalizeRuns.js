const path = require('path')
const fs = require('fs')
const turfLength = require('@turf/length').default
const { lineString } = require('@turf/helpers')

const directory = path.resolve(__dirname, '../data/runs')
const out = path.resolve(__dirname, '../data/sani')
let items = fs.readdirSync(directory)

items = [items[1], items[20]]

items.forEach(item => {
  console.log(item)
  const contents = fs.readFileSync(`${directory}/${item}`).toString()

  const data = JSON.parse(contents)

  const properties = {}
  const coordinates = []

  if (data.features.length === 1) {
    properties.start = data.features[0].properties.time
    properties.duration = data.features[0].properties.coordTimes.length

    data.features[0].geometry.coordinates.forEach(coord => {
      coordinates.push(coord)
    })
  } else {
    properties.start = data.features[0].properties.starttime
    properties.duration = data.features.reduce(
      (total, x) => total + x.properties.TotalTimeSeconds,
      0
    )

    data.features.forEach(feature => {
      feature.geometry.coordinates.forEach(coord => {
        coordinates.push(coord)
      })
    })
  }

  const run = lineString(coordinates, properties)
  const distance = turfLength(run)

  run.properties.distance = distance

  fs.writeFileSync(path.join(out, item), JSON.stringify(run, null, 2))
})
