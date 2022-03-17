import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const Ticketslists = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        const response = await axios.get("http://localhost:5002/products");
        setProjects(response.data);
    };

    // const deleteProjects = async (id) => {
    //     await axios.delete(`http://localhost:5002/products/${id}`);
    //     getProjects();
    // }

    return (
        <div>
            {/* // <Link to="/ticketlist"  className="col-12"> */}
            <div>
                {/* // className="card"></Link> */}
                <DataTable
                    // sortMode="single" sortField="representative.name"
                    // value={projects}
                    sortOrder={1}
                    scrollable
                    scrollHeight="400px"
                    responsiveLayout="scroll"
                >
                    <Column value={projects.project_name} field="project_name" header="Project Name" style={{ minWidth: "200px" }}></Column>
                    <Column field="description" header="Description" style={{ minWidth: "200px" }}></Column>
                    <Column field="status" header="Status" style={{ minWidth: "200px" }}></Column>

                    {projects.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.project_name}</td>
                            <td>{product.description}</td>
                            <td>
                                {/* <Link to={`/edit/${product.id}`} >Edit</Link>
                                <button onClick={ () => deleteProjects(product.id) } >Delete</button> */}
                            </td>
                        </tr>
                    ))}
                </DataTable>
            </div>
        </div>
    );
};

export default Ticketslists;
