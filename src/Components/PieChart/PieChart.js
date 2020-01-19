import React , {Component} from 'react';
import * as d3 from 'd3';


class PieChart extends Component {

    componentDidMount(){
        const data = this.props.data;
        this.drawPieChart(data);
    }

    drawPieChart(data){
        let width = 450,
            height= 400,
            margin = 40;

        let radius = Math.min(height,width)/2.5 -margin;

        let arc=d3.arc()
            .innerRadius(radius * 0.6)
            .outerRadius(radius * 0.8);

        let outerArc = d3.arc()
            .innerRadius(radius * 0.9)
            .outerRadius(radius * 0.9);

        const svg = d3.select('.PieChart')
            .append( 'svg' )
            .attr( 'width', width )
            .attr( 'height', height )
            .append('g')
            .attr('transform','translate('+ width /2 +','+ height /2 +')');


        let color = d3.scaleOrdinal()
            .domain(data)
            .range(['#0177BB', '#F15939'])

        let pie = d3.pie()
            .value((d)=>d.value);

        let data_ready = pie(d3.entries(data));


        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg
          .selectAll('whatever')
          .data(data_ready)
          .enter()
          .append('path')
          .attr('d', d3.arc()
            .innerRadius(75)         // This is the size of the donut hole
            .outerRadius(radius)
          )
          .attr('fill', function(d){ return(color(d.data.key)) })
          .attr("stroke", "white")
          .style("stroke-width", "2px")
          .style("opacity", 0.7)

        //Add polylines

        svg
          .selectAll('allPolylines')
          .data(data_ready)
          .enter()
          .append('polyline')
            .attr("stroke", "black")
            .style("fill", "none")
            .attr("stroke-width", 1)
            .attr('points', function(d) {
              var posA = arc.centroid(d) // line insertion in the slice
              var posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
              var posC = outerArc.centroid(d); // Label position = almost the same as posB
              var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
              posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
              return [posA, posB, posC]
            })

        // Add the polylines between chart and labels:
        svg
          .selectAll('allLabels')
          .data(data_ready)
          .enter()
          .append('text')
            .text( (d) => {  return d.data.key } )
            .attr('transform', (d)=> {
                let pos = outerArc.centroid(d);
                let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
                pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
                return 'translate(' + pos + ')';
            })
            .style('text-anchor', (d)=> {
                let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
                return (midangle < Math.PI ? 'start' : 'end')
            })


    }

    render(){
        return(
            <div className = 'PieChart'>
            </div>
        )
    }

}

export default PieChart;
