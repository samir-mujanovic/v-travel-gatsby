import React, { Component } from 'react'
import { FaPlay } from 'react-icons/fa'
import { Link } from 'gatsby'

export default class Modal extends Component {
    state = {
        modalOpen: false,
        style: 'modal fade'
    }

    modalHandler = (e) => {
        e.preventDefault();
        this.state.modalOpen ? this.setState({ modalOpen: false, style: 'modal fade' }) : this.setState({ modalOpen: true, style: 'modal fade show' })
    }

    render() {
        return (
            <div className="modal-wrapp">
                <button className="btn play-button" onClick={this.modalHandler}>
                    <FaPlay />
                </button>
                <div className={this.state.style}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <Link className="close" onClick={this.modalHandler} />
                            <div className="modal-body">
                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/Qirbpm7O3E4"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
