import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import Problem from './Problem';
import axios from 'axios';

export default class Game extends Component {

    constructor(props) {
        super(props)
        this.state = {
        problem: 1
        }
    }

    //function which is called the first time the component loads
    componentDidMount() {
        this.getProblemData();
    }

    //Function to get the Customer Data from json
    getProblemData() {
        axios.get('assets/samplejson/list1.json').then(response => {
        this.setState({problemDescription: response})
        })
    };

    render() {
        if (!this.state.problemDescription) {
            return (<p>Loading data</p>)
        }
        console.log(this.state)
        return (
            <div className="addmargin">
                <Problem val={this.state.problem}/>
            </div>
        )
    }
}