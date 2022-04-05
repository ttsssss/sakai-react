import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
// import ButtonDemo from './ButtonDemo';
import { Chart } from "primereact/chart";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { Dialog } from "primereact/dialog";
// import { Media } from "react-bootstrap/Media"
// import ProjectsTable from "./Tables/ProjectsTable";
// import TicketsPieChart from "./Tables/TicketsPieChart"
// import API from

//project table
//eslint-disable no-unused-vars
const TableDemo = () => {
    const [project_name, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [projects, setProjects] = useState([]);
    const history = useHistory();

    const projectsToShow = projects.map((project) => {
        return {
            ...project,
            project_name: <Link to={`/projects/${project.id}`}>{project.project_name}</Link>,
        };
    });

    useEffect(() => {
        getProjects();
    }, []);

    const [displayResponsive, setDisplayResponsive] = useState(false);

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

    const dialogFuncMap = {
        displayResponsive: setDisplayResponsive,
    };

    const onClick = (name) => {
        dialogFuncMap[`${name}`](true);
    };

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    };

    const renderFooter = (name) => {
        return (
            <div>
                {" "}
                <Button onClick={saveProject} type="submit" label="Submit" className="p-button-rounded p-button-success mr-2 mb-2 success" />
            </div>
        );
    };

    // const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    // const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

    return (
        <>
            <div className="grid table-demo">
                <div className="col-12">
                    <div className="card">
                        <h5>Projects</h5>
                        <div>
                            <Button className="p-button-rounded mr-2 mb-2 npbutton" label="New Ticket" onClick={() => onClick("displayResponsive")} />
                        </div>
                        <Dialog className="dialogModal" header="Create Ticket" visible={displayResponsive} onHide={() => onHide("displayResponsive")} breakpoints={{ "960px": "75vw" }} style={{ width: "35vw" }} footer={renderFooter("displayResponsive")}>
                            <form onSubmit={saveProject}>
                                <h5>Project Name</h5>
                                <InputText value={project_name} onChange={(e) => setProjectName(e.target.value)} type="text" placeholder="Enter project name"></InputText>
                                <h5>Project Description</h5>
                                <InputTextarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Enter project description" autoResize rows="4" cols="40" />
                            </form>
                        </Dialog>

                        {/* // <Link to="/ticketlist"  className="col-12"> */}
                        <div>
                            {/* // className="card"></Link> */}
                            <DataTable
                                // sortMode="single" sortField="representative.name"
                                editMode="row"
                                value={projectsToShow}
                                sortOrder={1}
                                scrollable
                                scrollHeight="400px"
                                responsiveLayout="scroll"
                                paginator
                                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                                rows={5}
                                rowsPerPageOptions={[5, 10, 25]}
                            >
                                {/* // paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}> */}

                                <Column field="project_name" header="Project Name" style={{ minWidth: "200px" }}></Column>
                                <Column field="description" header="Description" style={{ minWidth: "350px" }}></Column>
                                <Column field="createdAt" header="Created On" style={{ minWidth: "150px" }}></Column>

                                {projects.map((project, index) => (
                                    <tr key={project.id}>
                                        <td>{index + 1}</td>
                                        <td>{project.description}</td>
                                        <td>{project.createdAt}</td>
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
