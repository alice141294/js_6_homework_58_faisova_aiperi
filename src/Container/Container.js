import React, {Component} from 'react';
import Modal from "../component/UI/Modal/Modal";
import Button from "../component/UI/Button/Button";
import Alert from "../component/UI/Alert/Alert";


class Container extends Component {
    state = {
        modal: false,
    };

    showUpModal = () => {
        this.setState({modal: true});
    };

    closeModal = () => {
        this.setState({modal: false});
    };

    continue = () => {
        alert('Continue!');
    };

    closeAlert = () => {
        alert('Alert clicked!');
    };

    render() {
        return (
            <div className="container py-5">
                <div className="mb-4">
                    <Button
                        type="secondary"
                        label="Click Modal"
                        clicked={this.showUpModal}
                    />
                </div>

                <Modal
                    show={this.state.modal}
                    closed={this.closeModal}
                    title="Modal Title"
                    buttons={
                        [
                            {type: 'primary', label: 'Save', clicked: this.continue},
                            {type: 'danger', label: 'Close', clicked: this.closeModal}
                        ]
                    }
                >
                    <p>Modal body</p>
                </Modal>

                <Alert
                    type="success"
                    dismiss={this.closeAlert}
                >Success alert with dismiss button</Alert>
                <Alert
                    type="warning"
                >Warning alert without dismiss button</Alert>
                <Alert
                    type="danger"
                    dismiss={this.closeAlert}
                    clickDismissable
                >Danger alert with dismiss button and clickDismissable property</Alert>

            </div>
        )
    }
}

export default Container;