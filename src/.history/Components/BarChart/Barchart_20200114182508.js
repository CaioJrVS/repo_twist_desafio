import React, {Component} from 'react';
import  d3 from 'd3';

import {noticiasPorCandidato, noticiasPorDia} from '../../Data/dataHandler';

Console.log(data);

class BarChart extends Component {

    render(){
        return(
            <div class= "BarChart">{noticiasPorCandidato}</div>
        )
    }
}

export default BarChart;
