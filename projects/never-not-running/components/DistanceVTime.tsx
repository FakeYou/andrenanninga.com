import React from 'react'
import * as d3 from 'd3'

type Props = {
  activities: Activity[]
}

const DistanceVTime: React.FunctionComponent<Props> = ({ activities }) => {
  const svgRef = React.createRef<SVGSVGElement>()
  const xAxisRef = React.createRef<SVGGElement>()
  const yAxisRef = React.createRef<SVGGElement>()

  const margin = { top: 20, left: 40, bottom: 20, right: 20 }
  const width = 800
  const height = 800

  const [circles, setCircles] = React.useState<
    React.SVGAttributes<SVGCircleElement>[]
  >([])

  React.useEffect(() => {
    if (!activities) {
      return
    }

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(activities, x => x.distance) || 0])
      .range([margin.left, width - margin.right])

    const yScale = d3
      .scaleTime()
      .domain([0, d3.max(activities, x => x.elapsedTime * 1000) || 0])
      .range([height - margin.bottom, margin.top])

    const circles = activities.map(activity => ({
      cx: xScale(activity.distance),
      cy: yScale(activity.elapsedTime * 1000),
      r: 2,
      fill: 'red',
    }))

    const xAxis = d3
      .axisBottom(xScale)
      .tickFormat(d => `${Math.min(d / 1000)}km`)
    const yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%H:%M'))

    d3.select(xAxisRef.current).call(xAxis)
    d3.select(yAxisRef.current).call(yAxis)

    setCircles(circles)
  }, [activities])

  return (
    <>
      <svg ref={svgRef} width={800} height={800}>
        {circles.map(circle => (
          <circle {...circle} />
        ))}

        <g
          ref={xAxisRef}
          transform={`translate(0, ${height - margin.bottom})`}
        />
        <g ref={yAxisRef} transform={`translate(${margin.left}, 0)`} />
      </svg>
    </>
  )
}

export default DistanceVTime
