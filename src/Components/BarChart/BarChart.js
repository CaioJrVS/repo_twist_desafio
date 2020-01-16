import React, {Component} from 'react';
import * as d3 from 'd3';

import {noticiasPorCandidato, noticiasPorDia} from '../../Data/dataHandler';

class BarChart extends Component {

    componentDidMount(){

        this.drawBarChart(noticias);

    }

    drawBarChart(data){
        const svgCanvas = d3.select('.BarChart')

    }

    render(){
        return(
            <div className= "BarChart style"></div>
        )
    }
}

export default BarChart;
