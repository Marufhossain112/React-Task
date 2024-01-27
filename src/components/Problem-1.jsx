import React, { useState } from 'react';

const Problem1 = () => {
    const [nameStatus, setNameStatus] = useState([]);
    const [show, setShow] = useState('all');
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    const filteredNameStatus = show === 'all' ? nameStatus : nameStatus.filter(item => item.status === show);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleStatusChange = (e) => {
        setStatus(e.target.value);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNameStatusArray = [...nameStatus];
        newNameStatusArray.push({ name, status });
        setNameStatus(newNameStatusArray);
        setName("");
        setStatus("");
    };

    // console.log("name status", nameStatus);

    const handleClick = (val) => {
        setShow(val);
    };

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" onChange={handleNameChange} />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" onChange={handleStatusChange} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredNameStatus.map((item, index) => (
                                    <tr key={index}>
                                        <td scope="col">{item.name}</td>
                                        <td scope="col">{item.status}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;