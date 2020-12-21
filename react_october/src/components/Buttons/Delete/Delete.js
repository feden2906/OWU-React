import React, {Component} from 'react';
import './Delete.css'
class Delete extends Component {
    render() {
        const { deleteUser,id } = this.props;

        return (
                <button onClick={()=>deleteUser(id)} className={'btn-delete-user-card'}>delete</button>
        );
    }
}

export default Delete;