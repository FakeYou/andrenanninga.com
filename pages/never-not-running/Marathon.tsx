import React from 'react'
import * as d3 from 'd3'
import dynamic from 'next/dynamic'

// const isServer = typeof window === 'undefined'
// const mapboxgl = !isServer ? require('mapbox-gl') : null

// console.log(mapboxgl)

type Props = {
  run?: Run
}

const Marathon: React.FunctionComponent<Props> = ({ run }) => {
  const reference = React.createRef<SVGSVGElement>()

  React.useEffect(() => {
    if (!run) {
      return
    }

    // if (mapboxgl) {
    //   mapboxgl.accessToken =
    //     'pk.eyJ1IjoiZW5qYWxvdCIsImEiOiJjaWhtdmxhNTIwb25zdHBsejk0NGdhODJhIn0.2-F2hS_oTZenAWc0BMf_uw'
    //   // var map = new mapboxgl.Map({
    //   //   container: 'map', // container id
    //   //   style: 'mapbox://styles/enjalot/cihmvv7kg004v91kn22zjptsc',
    //   //   center: [-0.1, 51.5119112],
    //   //   zoom: 13.5,
    //   // })
    // }

    const width = 400
    const height = 400

    const projection = d3
      .geoMercator()
      .scale(1)
      .translate([0, 0])

    const geoPath = d3.geoPath().projection(projection)

    const bounds = geoPath.bounds(run)

    const horizontalScale = (bounds[1][0] - bounds[0][0]) / width
    const verticalScale = (bounds[1][1] - bounds[0][1]) / height
    const scale = 0.9 / Math.max(horizontalScale, verticalScale)

    const translate: [number, number] = [
      (width - scale * (bounds[1][0] + bounds[0][0])) / 2,
      (height - scale * (bounds[1][1] + bounds[0][1])) / 2,
    ]

    projection.scale(scale).translate(translate)

    const longitude = d3
      .scaleLinear()
      .domain(run.geometry.coordinates.map((_, i) => i))
      .range(run.geometry.coordinates.map(x => x[0]))

    const latitude = d3
      .scaleLinear()
      .domain(run.geometry.coordinates.map((_, i) => i))
      .range(run.geometry.coordinates.map(x => x[1]))

    const svg = d3
      .select(reference.current)
      .attr('width', width)
      .attr('height', height)

    svg
      .append('path')
      .datum(run)
      .attr('d', geoPath)
      .attr('fill', 'none')
      .attr('stroke', 'red')

    const circle = svg
      .append('circle')
      .attr('r', 4)
      .attr('fill', 'green')

    d3.transition(`run-${Math.random()}`)
      .duration(run.properties.coordTimes.length * 50)
      .ease(d3.easeLinear)
      .tween('run', () => t => {
        const index = t * run.geometry.coordinates.length
        const point = projection([longitude(index), latitude(index)])

        if (point) {
          circle.attr('cx', point[0]).attr('cy', point[1])
        }
      })
  }, [run])

  return (
    <>
      <svg ref={reference} width={400} height={400} />
      <div id="map" style={{ width: 400, height: 400 }} />
    </>
  )
}

export default Marathon
