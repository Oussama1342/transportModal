import { Component } from "react"
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import ClientService from '../../services/ClientService'
export class ClientDash extends Component{


    constructor(props) {
        super(props)

        this.state = {
                clients: [],
        
        }
    }
    componentDidMount(){
        ClientService.allClient().then((res) => {
            this.setState({ clients: res.data});
            console.log(res.data)
        });
    }




    render() {  
        return (  


         <div >
             <section className="content">
    <div className="container-fluid">
      {/* Small boxes (Stat box) */}
    
      {/* /.row */}
      {/* Main row */}
      <div className="row">
        {/* Left col */}
        <section  style={{ marginLeft: '30%' } }>
          {/* Custom tabs (Charts with tabs)*/}
          <div className="card"  style= {   { width: '900px' } }>
            <div className="card-header">
              <h3 className="card-title" >
                <i className="fas fa-chart-pie mr-1" />
                 Nos Clients 
              </h3>
             
            </div>{/* /.card-header */}
            <div className="card-body">
       <form>
  {/* Email input */}
  
  <div className="form-row mb-4">
  <div className="col">
  <img src="/dist/img/transport.png"   style={{ width: '100px' }, { height: '100px' }  }  />
  </div>
  <div className="col">
  <font size={2} style={{lineHeight: '1px'}}><font >Express Transport</font></font><br></br>
  {/*<font size={2} style={{lineHeight: '1px'}}><font face="Times New Roman">5000 Avenu de x</font></font><br></br>*/}
  <font size={2} style={{lineHeight: '1px'}}><font >5000 Avenu de x</font></font><br></br>
  <font size={2} style={{lineHeight: '1px'}}><font >751256487</font></font>

  </div>
  </div>

  <hr  />
  
  















 
   
     <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                            <tr >
                             
                                    <th> Nom / Prenom</th>
                                        <th>  Tel</th>
                                    <th>   Adresse</th>
                                    <th>   Matricule Fiscale</th>

                                   <th>  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.clients.map(
                                        client => 
                                        <tr key = {client.codeClient}>

                                            
                                            <td> { client.nomPrenpm} </td>  
                                                <td> { client.telClient} </td>   
                                                <td> { client.adressClient} </td>   
                                                <td> { client.matriculFiscale} </td>   


                

                                       
                                             
                                             
                                             <td>
                                             <Link to={`/editClient/${client.codeClient}`}>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-info" >Edit </button>
                                            </Link>
                                             </td>
                                             <td>
                                             <button style={{marginLeft: "10px"}}   className="btn btn-danger" >Delete </button>


                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
  {/* Password input */}

  {/* 2 column grid layout for inline styling */}





  



  {/* Submit button */}
 
</form>




            </div>{/* /.card-body */}
          </div>
        
        
        </section>
 
        {/* right col */}
      </div>
      {/* /.row (main row) */}
    </div>{/* /.container-fluid */}
  </section>
        </div>




















            /////////////////////////
     
            
         
          
          
         
                  


         );
        
        }
}

export default ClientDash 