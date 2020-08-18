import React,{Component} from "react";
import Axios from "axios";
import RecordsList from "./RecordsList";
export default class View extends Component{
    constructor(props) {
        super(props);
        this.state={students: []};
    }
    componentDidMount() {
        Axios.get("http://localhost/GCGC_V2.0/view.php")
            .then(responses => {
                this.setState({students: responses.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }
    userList(){
        return this.state.students.map(function (object,i){
            return <RecordsList obj={object} key={i} />
        })
    }

    render(){
        return (
            <div>
                <h3 align={"center"}>Users List</h3>
                <table className={"table table-striped"} style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email </th>
                        <th colSpan={"2"}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {this.userList()}
                    </tbody>
                </table>
            </div>
        )
    }
}