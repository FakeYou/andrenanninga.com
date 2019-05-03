interface Run extends d3.ExtendedFeature {
  properties: {
    name: string
    time: Date | string
    timingDelta: number
    coordTimes: (Date | string)[]
  }
  geometry: GeoJSON.LineString
}
