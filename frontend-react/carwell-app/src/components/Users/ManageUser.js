import axios from 'axios';
import React from "react";
import { Link } from 'react-router-dom';
import './ManageUser.css';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';



const userAPI = "/profile/";


export default class ManageUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user: { id: '' } };
        this.handleDelete = this.handleDelete.bind(this);
    }


    componentDidMount() {
        const { match: { params } } = this.props;

        axios.get(`http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/users/${params.id}`)
            .then(({ data: user }) => {
                this.setState({ user });
            });
    }




    handleDelete() {
        const { match: { params } } = this.props;
        axios.delete(`http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/users/${params.id}`)
            .then(() => {
                console.log('User deleted');
            });
    }


    render() {
        const { user } = this.state;
        return (
            <div>
                <div className="container">
                    <h2>Update User</h2>
                    <h3> Rafael, I left 2 triggers for the same Update (PUT) component. Try them both, leave one that will look the best. </h3>
                    <ul>

                        <div key={user.id} className="CardInfo  liteText">
                            <span className="line">


                                <label className="boldText ">&nbsp;&nbsp;ID:&nbsp;&nbsp;</label>{user.id}
                            </span>
                            <span className="line">
                                <label className="boldText ">&nbsp;&nbsp;First Name:&nbsp;&nbsp;</label>{user.firstName}
                            </span>
                            <span className="line">
                                <label className="boldText ">&nbsp;&nbsp;Last Name:&nbsp;&nbsp;</label>{user.lastName}
                            </span>
                            <span className="line lastLine">
                                <label className="boldText ">&nbsp;&nbsp;Username:&nbsp;&nbsp;</label>{user.username}
                            </span>


                            <div class="tbd">
                                <div id="accordion">
                                    <div className="card">
                                        <div class="card-header">
                                            <a className="card-link" data-toggle="collapse" href="#collapseOne">
                                                Update User Information
                                        </a>
                                        </div>
                                        <div id="collapseOne" className="collapse" data-parent="#accordion">
                                            <div className="card-body">
                                                <UpdateUser />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="tbd">
                                <div id="accordion">
                                    <div className="card">
                                        <div class="card-header">
                                            <a className="card-link" data-toggle="collapse" href="#collapseTwo">
                                                Delete User
                                        </a>
                                        </div>
                                        <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                            <div className="card-body">
                                                <DeleteUser />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>




                            <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">Edit Information</button>
                            <div id="demo" class="collapse">
                                <UpdateUser />

                            </div>
                            <Link to={userAPI + user.id}>
                                <button className="btn btn-secondary btn-md">Cancel</button>
                            </Link>
                        </div>
                    </ul>
                </div>



            </div>
        )
    }
}
