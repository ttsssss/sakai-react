import React, { useState, useEffect } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
// import { Modal, ModalFooter, ModalHeader } from "react-bootstrap";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
// import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";

import axios from "axios";

const Projectz = () => {
    const [ticket_title, setTicketTitle] = useState("");
    const [ticket_description, setTicketDescription] = useState("");
    // const [time_takes, setTimeTakes] = useState("");
    const [type_menu, setTypeMenu] = useState("");
    const [priority_menu, setPriorityMenu] = useState("");
    const [status_menu, setStatusMenu] = useState("");

    const [projects, setProjects] = useState([]);

    //part of modal
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState("center");

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        const response = await axios.get("http://localhost:5002/ticket_table");
        setProjects(response.data);
    };

    const saveProject = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5002/ticket_table", {
            ticket_title: ticket_title,
            ticket_description: ticket_description,
            // time_takes: time_takes,
            type_menu: type_menu,
            priority_menu: priority_menu,
            status_menu: status_menu,
        });
    };

    const dropdownValues1 = [{ value: "Issue" }, { value: "Bug" }, { value: "Error" }, { value: "Other" }];

    const dropdownValues2 = [{ value: "Low" }, { value: "Medium" }, { value: "High" }, { value: "Immediate" }];

    const dropdownValues3 = [{ value: "New" }, { value: "Open" }, { value: "In Progress" }, { value: "Resolved" }, { value: "Additional Info Required" }];

    const dialogFuncMap = {
        displayResponsive: setDisplayResponsive,
    };

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    };

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    };

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Submit" className="p-button-rounded p-button-success mr-2 mb-2 success" />
            </div>
        );
    };

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <>
            <div className="grid table-demo">
                <div className="col-12">
                    <div className="card">
                        <h5>Tickets</h5>

                        <div>
                            {/* <Button label="New Ticket" className="p-button-rounded mr-2 mb-2 npbutton" onClick={handleShow} /> */}
                            <Button className="p-button-rounded mr-2 mb-2 npbutton" label="New Ticket" onClick={() => onClick("displayResponsive")} />
                        </div>
                        <Dialog className="dialogModal" header="Create Ticket" visible={displayResponsive} onHide={() => onHide("displayResponsive")} breakpoints={{ "960px": "75vw" }} style={{ width: "30vw" }} footer={renderFooter("displayResponsive")} Submit={ saveProject }>
                            <h5>Ticket Name</h5>
                            <InputText value={ticket_title} onChange={(e) => setTicketTitle(e.target.value)} type="text" placeholder="Enter ticket name"></InputText>
                            <h5>Ticket Description</h5>
                            <InputTextarea value={ticket_description} onChange={(e) => setTicketDescription(e.target.value)} type="text" placeholder="Enter ticket description" autoResize rows="3" cols="30" />
                            {/* <h5>Time Estimate (Hours)</h5> */}
                            {/* <InputNumber value={time_takes} onValueChange={(e) => setTimeTakes(e.value)} showButtons mode="decimal"></InputNumber> */}
                            <h5>Type</h5>
                            <Dropdown value={type_menu} onChange={(e) => setTypeMenu(e.value)} options={dropdownValues1} optionLabel="value" placeholder="Select" />
                            <h5>Priority</h5>
                            <Dropdown value={priority_menu} onChange={(e) => setPriorityMenu(e.value)} options={dropdownValues2} optionLabel="value" placeholder="Select" />
                            <h5>Status</h5>
                            <Dropdown value={status_menu} onChange={(e) => setStatusMenu(e.value)} options={dropdownValues3} optionLabel="value" placeholder="Select" />
                        </Dialog>
                        <div>
                            <DataTable
                                // sortMode="single" sortField="representative.name"

                                sortOrder={1}
                                scrollable
                                scrollHeight="400px"
                                responsiveLayout="scroll"
                            >
                                <Column field="ticket_title" header="Ticket Title" style={{ minWidth: "200px" }}></Column>
                                <Column field="description" header="Description" style={{ minWidth: "350px" }}></Column>
                                <Column field="status" header="Status" style={{ minWidth: "200" }}></Column>
                                <Column field="createdAt" header="Date" style={{ minWidth: "200px" }}></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid table-demo">
                <div className="col-12">
                    <div className="card">
                        <h5>Ticket Info</h5>
                        <div>
                            <DataTable
                            // value={projects}
                            // sortMode="single" sortField="representative.name"
                            // sortOrder={1}
                            // scrollable
                            // scrollHeight="400px"
                            // responsiveLayout="scroll"
                            >
                                {projects.map((project, index) => (
                                    <tr key={project.id}>
                                        <td>{index + 1}</td>
                                        <td>{project.ticket_title}</td>
                                        <td>{project.ticket_description}</td>
                                        {/* <td>{ticket.time_takes}</td> */}
                                        <td>{project.type_menu}</td>
                                        <td>{project.priority_menu}</td>
                                        <td>{project.status_menu}</td>
                                    </tr>
                                ))}
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(Projectz);
