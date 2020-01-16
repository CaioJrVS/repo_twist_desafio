import React , {Component} from 'react';
import './App.css';

//import BarChart from '../Components/BarChart/BarChart';
import LineChart from '../Components/LineChart/LineChart';
import PieChart from '../Components/PieChart/PieChart';

class App extends Component {

    render(){
        return (
            <div className="App">
                <PieChart />
                <LineChart />
            </div>
      );
    }
}
export default App;
