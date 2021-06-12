import React, { Component } from 'react';
import axios from 'axios';
class Category extends Component{

    constructor(props){
        super(props);
        this.state = {
            categories:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/category/')
            .then(response => {
                this.setState({categories: response.data.data})
            })
    }

    navigateRoomPage(e, courseId) {
        window.location = `/${courseId}`
    }

    output(){
        window.alert("succ");
    }

    render(){
        return(
            <div>
                <h1>Category List</h1>
                {this.state.categories.length > 0 && this.state.categories.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3" onClick={e => this.navigateRoomPage(e, item._id)}>


                            {/*<table className="table">*/}
                            {/*    <thead>*/}
                            {/*    <tr>*/}
                            {/*        <th>Name</th>*/}
                            {/*        <th scope="col">Description</th>*/}
                            {/*    </tr>*/}
                            {/*    </thead>*/}
                            {/*    <tbody>*/}
                            {/*    <tr>*/}
                            {/*        <td>{item.name}*/}
                            {/*            {item.description}</td>*/}
                            {/*    </tr>*/}
                            {/*    </tbody>*/}
                            {/*</table>*/}
                            <h4>Course Name: {item.name}</h4>
                            <h5>Lecture: {item.description}</h5>
                            {/*<button type="button" className="btn btn-primary" onClick={this.output}>Primary</button>*/}
                        </div>
                    </div>
                ))}
            </div>

        )
    }
}
export default Category;