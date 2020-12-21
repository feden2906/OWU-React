import React, {Component} from 'react';
import './ModalCreate.css'

class ModalCreate extends Component {
    // constructor(props) {
    //   super(props);
    //   const {chosenUser: {id, name, username, phone, email, website}} = this.props
    state = {id: '', name: '', username: '', phone: '', email: '', website: ''}
    // }
    //
    checkNewName = (e) => this.setState({name: e.target.value});
    checkNewUserName = (e) => this.setState({username: e.target.value});
    checkNewPhone = (e) => this.setState({phone: e.target.value});
    checkNewEmail = (e) => this.setState({email: e.target.value});
    checkNewWebSite = (e) => this.setState({website: e.target.value});

    render() {
        const {modalCreateClose} = this.props
        return (
            <div className='modal-wrapper-create'>
                <div className='modal-form-create'>
                    <h2><b>Create form</b></h2>
                    <div className='modal-inp-wrapper-create'>
                        <span><b className='fs20'>Name :</b></span>
                        <input onInput={this.checkNewName} className='modal-input-create' type="text" />
                    </div>
                    <div className='modal-inp-wrapper-create'>
                        <span><b className='fz-20'>Username :</b></span>
                        <input onInput={this.checkNewUserName} className='modal-input-create' type="text" />
                    </div>
                    <div className='modal-inp-wrapper-create'>
                        <span><b className='fz-20'>Phone :</b></span>
                        <input onInput={this.checkNewPhone} className='modal-input-create' type="text" />
                    </div>
                    <div className='modal-inp-wrapper-create'>
                        <span><b className='fz-20'>Email :</b></span>
                        <input onInput={this.checkNewEmail} className='modal-input-create' type="text" />
                    </div>
                    <div className='modal-inp-wrapper-create'>
                        <span><b className='fz-20'>Website :</b></span>
                        <input onInput={this.checkNewWebSite} className='modal-input-create' type="text" />
                    </div>
                    <div className='modal-btn-wrapper-create'>
                        <button onClick={() => modalCreateClose('create', this.state)} className='btn-edit-user-card'>Create</button>
                        <button onClick={() => modalCreateClose()} className='btn-close-user-card'>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalCreate;