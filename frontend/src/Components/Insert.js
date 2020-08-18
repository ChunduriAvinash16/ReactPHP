import React,{Component} from "react";
import Axios from 'axios';
export default class Insert extends Component{
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name:'',
            last_name: '',
            email:''
        }
    }
        onChangeFirstName(e) {
            this.setState({
                first_name: e.target.value
            });
        }
        onChangeLastName(e) {
            this.setState({
                last_name: e.target.value
            });
        }
        onChangeEmail(e) {
            this.setState({
                email: e.target.value
            });
        }
        onSubmit(e) {
            e.preventDefault();//Value will be submitted through react js
            const obj = {
                first_name : this.state.first_name,
                last_name : this.state.last_name,
                email: this.state.email
            };
            Axios.post("http://localhost:80/GCGC_V2.0/insert.php",obj).then(res => console.log(res.data));
            //console.log(obj);
            this.setState({
                    first_name: '',
                    last_name:'',
                    email:''
                })
        }

    render(){
        return (
            <div style={{marginTop: 10}}>
                <h3> Add New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className={"form-group"}>
                        <label>First Name: </label>
                        <input type={"text"} className={"form-control"}
                        value={this.state.first_name}
                        onChange={this.onChangeFirstName}/>
                    </div>
                    <div className={"form-group"}>
                        <label>Last Name: </label>
                        <input type={"text"} className={"form-control"}
                        value={this.state.last_name}
                        onChange={this.onChangeLastName}/>
                    </div>
                    <div className={"form-group"}>
                        <label>Email: </label>
                        <input type={"text"} className={"form-control"}
                        value={this.state.email}
                        onChange={this.onChangeEmail}/>
                    </div>
                    <div className={"form-group"}>
                        <input type={"submit"} value={"Register User"} className={"btn btn-primary"}/>
                    </div>
                </form>
            </div>
        )
    }
}