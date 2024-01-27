import React from 'react';
import { Link } from 'react-router-dom';
import AllContactModal from './AllContactModal';

const UsContactModal = () => {
    return (
        <div class="modal fade" id="usContacts" tabindex="-1" aria-labelledby="usContactsLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="usContactsLabel">US Contacts</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div className="modal-footer d-flex justify-content-between  ">
                        <div className='d-flex align-items-center gap-1'>
                            <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /> <span>Only even</span>
                        </div>
                        <div className='d-flex gap-2'>
                            <Link to="/all-contacts">
                                <button style={{ background: '#46139f', borderColor: '#46139f' }} type="button" class="btn btn-primary">All contacts</button>
                            </Link>
                            <Link to="/us-contacts">
                                <button style={{ background: '#ff7f50', borderColor: '#ff7f50' }} type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#usContacts">US contacts</button>
                            </Link>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsContactModal;