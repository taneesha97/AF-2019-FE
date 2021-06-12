import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
const initialState = {
    name:'',
    description:'',
    rooms: [],
    options:[],
    selectedRooms:[]
}

class CreateCategory extends Component{

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onRoomSelect = this.onRoomSelect.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        axios.get('http://localhost:8080/room/')
            .then(response => {
                this.setState({ rooms: response.data.data }, () => {
                    let data = [];
                    this.state.rooms.map((item, index) => {
                        let room = {
                            value: item._id,
                            label: item.code
                        }
                        data.push(room)
                    });
                    this.setState({ options: data });
                })
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onRoomSelect(e) {
        this.setState({selectedRooms: e ? e.map(item => item.value) : []});
    }

    onSubmit(e){
        e.preventDefault();
        let category = {
            name: this.state.name,
            description: this.state.description,
            rooms: this.state.selectedRooms
        };
        console.log(category);
        axios.post('http://localhost:8080/category/create', category)
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
                <h1 >Create Category</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="subjectName" className="form-label">Name</label>
                        <input
                            type="name"
                            className="form-control"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}>
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Rooms</label>
                        <Select
                            options={this.state.options}
                            onChange={this.onRoomSelect}
                            className="basic-multi-select"
                            isMulti
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateCategory;