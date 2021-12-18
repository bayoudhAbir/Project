import React from "react";
import Table from 'react-bootstrap/Table'
const ClientCard=(props)=>{
    return(
        props.clients.map( el=>
             <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>{el.id}</td>
                  <td>{el.raisonSocial}</td>
                  <td>{el.capitalSocial}</td>
                  <td>{el.matFiscal}</td>
                  <td>{el.addresseSociete}</td>
                  <td>{el.nCNSS}</td>
                  <td>{el. echanceFiscal}</td>
                  <td>{el.echanceCNSS}</td>
                  <td>{el.nRNE}</td>
                  <td>{el.activite}</td>
                  <td>{el.gerant}</td>
                  <td>{el.nTeleGerant}</td>
                  <td>{el.mailGerant}</td>
                </tr>
              </tbody>
            </Table>
    )
    )
}
export default ClientCard
