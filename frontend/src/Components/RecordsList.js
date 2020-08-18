import React, {Component} from "react";
import Axios from 'axios';
import {Redirect} from 'react-router';
import {Link} from "react-router-dom";

export default class RecordsList extends Component{
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false
        }
    }
    delete(e) {
        Axios.get("http://localhost/GCGC_V2.0/delete.php?id="+this.props.obj.sid)
        .then(
            this.setState({redirect : true})
        )
            .catch(err => console.log(err))
    }
    render(){
        const {redirect} = this.state;

        if(redirect){
            return <Redirect to={"/view"}/>
        }
        return(
            <tr>
                <td>
                    {this.props.obj.first_name}
                </td>
                <td>
                    {this.props.obj.last_name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj.sid} className={"btn btn-primary"}>Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className={"btn btn-danger"}>Delete</button>
                </td>
            </tr>
        );
    }
}