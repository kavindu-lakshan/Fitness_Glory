import React, {Component} from 'react';
import axios from 'axios';
import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function DiaApp() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
            <form>
              <input 
                required
              />
              <input 
                required
              />
              <br></br>
        <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

Modal.setAppElement('#root');

export default class CreateDismissal extends Component {
  constructor (props) {
    super(props);

    this.onChangeNICNumber = this.onChangeNICNumber.bind(this);
    this.onChangeReason = this.onChangeReason.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      NICNumber: '',
      Reason: ''
    }   
  }

  onChangeNICNumber(e) {
    this.setState ({
      NICNumber: e.target.value
    });
  }

  onChangeReason(e) {
    this.setState ({
      Reason: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
      const dismissal = {
        NICNumber: this.state.NICNumber,
        Reason: this.state.Reason
      }
      console.log(dismissal);
      axios.post('http://localhost:5000/Employee_Delete/add', dismissal)
      .then(res => res.json(dismissal));
      window.location = '/';
  }
  
  render() {
    return(
      <div>
        <form onSubmit = {this.onSubmit}>
          <div>
            <div className = "form-group">
              <label>NICNumber</label>
                <input 
                  type = "text"
                  required
                  className = "form-control"
                  value = {this.state.NICNumber}
                  onChange = {this.onChangeNICNumber}
                />
            </div>
            <div className = "form-group">
              <label>Reason</label>
                <input 
                  type = "text"
                  required
                  className = "form-control"
                  value = {this.state.Reason}
                  onChange = {this.onChangeReason}
                />
            </div>
            <div className = "form-group">
              <input type = "submit" value = "Submit" className = "btn btn-primary"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}