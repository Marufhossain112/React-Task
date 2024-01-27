import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllContactModal from './AllContactModal';

const UsContactModal = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://contact.mediusware.com/api/contacts/', {
                    method: 'GET',
                    headers: {
                        'accept': 'application/json',
                        'X-CSRFToken': 'LRJO7GaBGWa2oAZcSNxJjz5FtM2OeDl8PvBNcVjMDbmmHskBnIXUPZ3ZUMuJnajY'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    const usContacts = data?.results.filter((contact) => contact?.country?.name === 'United States');
    // console.log("usContacts",usContacts)
    console.log("usContacts", usContacts);
    return (
        <div class="modal fade" id="usContacts" tabindex="-1" aria-labelledby="usContactsLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="usContactsLabel">US Contacts</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {
                            usContacts?.map((contact) => (
                                <div className='d-flex text-decoration-none gap-2'>
                                    <span>Id: {contact?.country?.id}</span>
                                    <span>Country: {contact?.country?.name}</span>
                                    <span>Phone: {contact?.phone}</span>
                                </div>
                            ))
                        }
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