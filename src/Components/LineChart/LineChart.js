import React, {Component} from 'react';
import * as d3 from 'd3';

import './LineChart.css';


class LineChart extends Component {

    componentDidMount(){
        this.drawLineChart(this.props.data);
    }

    drawLineChart(data){
        let margin = {top:20, right:20, bottom:30, left:100},
            width = 960-margin.left - margin.right,
            height = 500 -margin.top - margin.bottom;

        let parseTime = d3.timeParse('%m-%d');

        let x = d3.scaleTime().range([0,width]);
        let y = d3.scaleLinear().range([height,0]);

        let valueLine = d3.line()
            .x((d)=>{return d.dia})
            .y((d)=>{return d.numDeNoticias})

        let valueLine2=d3.line()
            .x(d=>d.dia)
            .y(d=>d.numDeNoticias+ 2000000)

        let svg = d3.select('.LineChart')
            .append('svg')
            .attr('width', width + margin.left + margin.bottom)
            .attr('height',height +margin.bottom + margin.top)
            .append('g')
            .attr("transform","translate (" + margin.left+','+margin.top+')');

        function draw(data,candidato){

            data = data[candidato];

            data.forEach((d)=>{
                d.dia = parseTime(d.dia);
                d.numDeNoticias = +d.numDeNoticias;
            });

            data.sort((a,b)=>{
                return a["dia"]-b["dia"];
            });

            x.domain(d3.extent(data,(data)=>{return data.dia}));
                y.domain([0,d3.max(data, (d)=>{return d.numDeNoticias})])

            svg.append('path')
                .data([data])
                .attr('class','line')
                .attr('d',valueLine);

            svg.append('path')
                .data([data])
                .attr('class','line')
                .attr('d', valueLine2);

            svg.append('g')
                .attr('transform','translate(0,'+ height+')')
                .call(d3.axisBottom(x));

            svg.append('g')
                .call(d3.axisLeft(y));
        };

        draw(data,'Crivella');
    }

    render(){
        const style = {
            ".line":{
                'fill':'none',
                'stroke': 'steelblue',
                'stroke-width':'2px'
            }
        }
        return(
        <div className='LineChart' style = {style}></div>
        )
    }
}

export default LineChart;
