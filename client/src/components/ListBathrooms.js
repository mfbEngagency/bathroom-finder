import React, { Fragment, useEffect, useState } from "react";

const ListBathrooms = () => {
    const [bathrooms, setBathrooms] = useState([])
    const getBathrooms = async () => {
        try {
            const response = await fetch("http://localhost:5000/bathrooms");
            const jsonData = await response.json();
            setBathrooms(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getBathrooms();
    }, []);
    console.log(bathrooms);
    return ( 
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Location</th>
                        <th scope="col">Requires Key</th>
                        <th scope="col">Passcode</th>
                        <th scope="col">Is Public</th>
                    </tr>
                </thead>
                <tbody>
                    {bathrooms.map(bathroom => (
                        <tr>
                            <td>{bathroom.name}</td>
                            <td>{bathroom.description}</td>
                            <td>Location</td>
                            <td>Requires Passcode</td>
                            <td>Passcode</td>
                            <td>Yes/No</td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </Fragment>
    )};

export default ListBathrooms;