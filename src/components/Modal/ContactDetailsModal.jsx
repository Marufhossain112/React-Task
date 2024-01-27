import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UsContactModal from './UsContactModal';

const ContactDetailsModal = ({ contact }) => {


    return (

        <div class="modal fade" id={`contactDetailsModal${contact.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Contact Details</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex gap-2">
                        <span>Id: {contact?.country?.id}</span>
                        <span>Country: {contact?.country?.name}</span>
                        <span>Phone: {contact?.phone}</span>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetailsModal;