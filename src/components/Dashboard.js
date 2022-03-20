import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
// import ButtonDemo from './ButtonDemo';
import { Chart } from "primereact/chart";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Modal, ModalFooter, ModalHeader } from "react-bootstrap";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
// import { Media } from "react-bootstrap/Media"
// import ProjectsTable from "./Tables/ProjectsTable";
// import TicketsPieChart from "./Tables/TicketsPieChart"
// import API from

//project table
//eslint-disable no-unused-vars
const TableDemo = () => {
    // const toggle = () => {setShow(!show);}
    const [project_name, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [projects, setProjects] = useState([]);
    const history = useHistory();
    
    const projectsToShow = projects.map(project => {
        return {
            ...project,
            project_name:  <Link to={`/projects/${project.id}`}>{project.project_name}</Link>
        }    
    })
    

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        const response = await axios.get("http://localhost:5002/bugtracker_table");
        setProjects(response.data);
    };

    const saveProject = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5002/bugtracker_table", {
            project_name: project_name,
            description: description,
        });
        history.push("/");
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="grid table-demo">
                <div className="col-12">
                    <div className="card">
                        <h5>Projects</h5>

                        <div>
                            <Button label="New Project" className="p-button-rounded mr-2 mb-2 npbutton" onClick={handleShow} />
                        </div>
                        <Modal className="modal" show={show} onHide={handleClose}>
                            <form onSubmit={saveProject}>
                                <div className="grid p-fluid">
                                    <div className="col-12 md:col-6">
                                        <div className="card">
                                            <ModalHeader>
                                                <h5>Projects</h5>
                                            </ModalHeader>
                                            <div className="grid formgrid">
                                                <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                                                    <InputText value={project_name} onChange={(e) => setProjectName(e.target.value)} type="text" placeholder="Enter project name"></InputText>
                                                </div>
                                            </div>
                                            <h5>Project Description</h5>
                                            <InputTextarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Enter project description" autoResize rows="3" cols="30" />
                                            <ModalFooter>
                                                <Button label="Submit" className="p-button-rounded p-button-success mr-2 mb-2" />
                                                <Button onClick={handleClose}>Close</Button>
                                            </ModalFooter>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Modal>

                        {/* // <Link to="/ticketlist"  className="col-12"> */}
                        <div>
                            {/* // className="card"></Link> */}
                            <DataTable
                                // sortMode="single" sortField="representative.name"
                                value={projectsToShow}
                                sortOrder={1}
                                scrollable
                                scrollHeight="400px"
                                responsiveLayout="scroll"

                            >
                                <Column field="project_name" header="Project Name" style={{ minWidth: "200px" }}></Column>
                                {/* <Column field="ticket_title" header="Ticket Title" style={{ minWidth: "200px" }}></Column> */}
                                <Column field="description" header="Description" style={{ minWidth: "350px" }}></Column>
                                <Column field="status" header="Status" style={{ minWidth: "200" }}></Column>
                                <Column field="createdAt" header="Date" style={{ minWidth: "200px" }}></Column>

                                {projects.map((project, index) => (
                                    <tr key={project.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Link to={`/projects/${project.id}`}>{project.project_name}</Link>
                                        </td>
                                        <td>{project.description}</td>
                                        <td>{project.createdAt}</td>\{" "}
                                    </tr>
                                ))}
                            </DataTable>
                        </div>
                    </div>
                </div>

                <div className="grid p-fluid">
                    <div className="col-12 lg:col-6">
                        <div className="card flex flex-column align-items-center">
                            <h5>Tickets by Type</h5>
                            <Chart type="pie" focus={"type"} />
                        </div>
                    </div>
                </div>

                <div className="grid p-fluid">
                    <div className="col-12 lg:col-6">
                        <div className="card flex flex-column align-items-center">
                            <h5>Tickets by Priority</h5>
                            <Chart type="pie" focus={"priority"} />
                        </div>
                    </div>
                </div>

                <div className="grid p-fluid">
                    <div className="col-12 lg:col-6">
                        <div className="card flex flex-column align-items-center">
                            <h5>Tickets by Status</h5>
                            <Chart type="pie" focus={"status"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default React.memo(TableDemo);
