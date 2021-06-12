import React, { Component } from 'react';
import axios from 'axios';
// import {makeStyles, Paper} from "@material-ui/core";

const initialState = {
    code: '',
    amount: 0,
    wing: '',
    pax:0
}

class CreateRoom extends Component{

    constructor(props){
        super(props);
        //bind the function
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    //1.When typing the text fields
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    //2.button submit
    onSubmit(e){
        e.preventDefault();
        let room = {
            code: this.state.code,
            amount:this.state.amount,
            wing:this.state.wing,
            pax: this.state.pax
        }
        console.log('Data: ',room);
        axios.post('http://localhost:8080/room/create', room)
            .then(response => {
                alert('Data successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render(){
        return(
            <div className="container">
                <h1 >Create Room</h1>
                {/* <Paper> */}
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="subjectName" className="form-label">Code</label>
                        <input
                            type="name"
                            className="form-control"
                            // id="code"
                            name="code"
                            value={this.state.code}
                            onChange={this.onChange}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount</label>
                        <input
                            type="number"
                            className="form-control"
                            // id="amount"
                            name="amount"
                            value={this.state.amount}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subjectName" className="form-label">Wing</label>
                        <input
                            type="name"
                            className="form-control"
                            // id="wing"
                            name="wing"
                            value={this.state.wing}
                            onChange={this.onChange}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Pax</label>
                        <input
                            type="number"
                            className="form-control"
                            // id="pax"
                            name="pax"
                            value={this.state.pax}
                            onChange={this.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
                {/* </Paper> */}
            </div>
        )
    }
}

export default CreateRoom;