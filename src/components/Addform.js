import React, { Component } from 'react';
 
export default class AddForm extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            Name: '',
            Born: '',
            Role: '',
            BattingStyle:'',
            BowlingStyle:'',
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
   localStorage.setItem('document',JSON.stringify(this.state));
}
 
// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
 
    if (localStorage.getItem('document')) {
        this.setState({
            Name: this.documentData.Name,
            Born: this.documentData.Born,
            Role: this.documentData.Role,
            BattingStyle: this.documentData.BattingStyle,
            BowlingStyle: this.documentData.BowlingStyle,
           
    })
} else {
    this.setState({
      Name: '',
      Born: '',
      Role: '',
      BattingStyle:'',
      BowlingStyle:'',
    })
}
}
 
render() {
    return (
        <div className="container">
            <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="title" className="form-control" value={this.state.Name} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Born</label>
                    <input type="text" name="title" className="form-control" value={this.state.Born} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <input type="text" name="title" className="form-control" value={this.state.Role} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                <label>BattingStyle</label>
                    <input type="text" name="title" className="form-control" value={this.state.BattingStyle} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                <label>BowlingStyle</label>
                    <input type="text" name="title" className="form-control" value={this.state.BowlingStyle} onChange={this.handleChange} />
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    )
}
}

 