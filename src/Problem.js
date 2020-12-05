import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class Problem extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getProblemDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {
    //console.log(this.props.problem)
    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getProblemDetails(this.props.problem)
    }
  }

  //Function to Load the customerdetails data from json.
  getProblemDetails(id) {
    axios.get('assets/samplejson/list' + id + '.json').then(response => {
      this.setState({problemDetails: response})
    })
  };

  render() {
    if (!this.state.problemDetails)
      return (<p>Loading Data</p>)
    console.log(this.state);
    return (<div className="problemdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.problemDetails.data.pattern}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {this.state.problemDetails.data.pattern}</p>
        </Panel.Body>
      </Panel>
    </div>)
  }
}
