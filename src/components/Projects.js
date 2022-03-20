import React from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Row, Col } from "react-bootstrap";

const Projects = () => {
    
    return (
        <>
            <div className="grid table-demo">
                <div className="col-12">
                    <div className="card">
                        <h5>Tickets</h5>
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
                        <h5>Tickets</h5>
                        <div>
                            <DataTable
                                // sortMode="single" sortField="representative.name"
                                // sortOrder={1}
                                // scrollable
                                // scrollHeight="400px"
                                // responsiveLayout="scroll"
                            >
                                 <Row>
                                    <Col>Name</Col>
                                    <Col>Ticket</Col>
                                    <Col>Person</Col>
                                </Row>
                                <Row>
                                    <Col>Status</Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row> 
                                
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default React.memo(Projects);

 