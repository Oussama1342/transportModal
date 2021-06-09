import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-modal';

import { useHistory, useParams } from "react-router-dom";

const SearchFunction = () => {
  let history = useHistory();
  const { id } = useParams();

  const [colis, setColis] = useState({
          refCoulis : '',
          nonEmeteur :'',
          numtelEmeteur :'',
          nonRecepteur:'',
          numtelRecepteur : 0,
          bureau : ''
         
  });

  const { refCoulis, nonEmeteur,numtelEmeteur, nonRecepteur,numtelRecepteur, bureau } = colis;
  const onInputChange = e => {
    setColis({ colis, [e.target.name]: e.target.value });
  };

 
 

  useEffect(() => {
    loadColis();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/auth/updatecolis/${id}`, colis);
    console.log("update with succuess .....")
  };

  const loadColis = async () => {
    const result = await axios.get(`http://localhost:8080/auth/findcolis/${id}`);
    setColis(result.data);
  };
  return (
    <div className="content-wrapper">

<div className="content-header" >
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0 text-dark">Dashboard Colis</h1>
                  </div>{/* /.col */}
                
                </div>{/* /.row */}
              </div>{/* /.container-fluid */}
            </div>



            <section style={{ width: '1400px'}}>
              <div className="container-fluid">
                {/* Small boxes (Stat box) */}
              
                {/* /.row */}
                {/* Main row */}
                <div className="row">
                  {/* Left col */}
                  <section className="col-lg-7 connectedSortable">
                    {/* Custom tabs (Charts with tabs)*/}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">
                          <i className="fas fa-chart-pie mr-1" />
                          Colis N : {colis.refCoulis}
                        </h3>
                        <div className="card-tools">
                         
                        </div>
                      </div>{/* /.card-header */}
                      <div className="card-body">
                      <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                            <tr >
                             
                                    <th> Réference</th>
                                    <th> Expediteur</th>
                                    <th> Destinateur</th>
                                    <th> Statut reception</th>
                                    <th> Statut Livraison</th>
                                    <th> Statut Remboursement</th>
                                    <th>  </th><th>  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                               
                                        <tr key = {colis.refCoulis}>
                                     
                               <td>{colis.refCoulis} </td> 


                              {colis.codeClientexped === 0 ? (
    <td>Nom : {colis.nonEmeteur}  <br></br> Tel :  {colis.numtelEmeteur} </td>  
  ) : (
    <td> {colis.codeClientexped}  </td>  
  )}  
                                    {colis.codeClientdest === 0 ? (
    <td>Nom : {colis.nonRecepteur}  <br></br> Tel :  {colis.numtelRecepteur} </td>  
  ) : (
    <td> {colis.codeClientdest}  </td>  
  )}  
      

   



  

  

                                            {colis.statuReception === "enattente" ? (
    <td>  <button className="btn btn-danger"  >
</button> En attante </td>  
  ) : (
    <td> <button className="btn btn-success"  >
    </button> Confirme</td>  
  )}  
                                            
                                         
                                            {colis.modePayement === "espece" ? (
    <td>  <button className="btn btn-success"  >
</button> Confirmé  </td>  
  ) : (
    <td> <button className="btn btn-danger"  >
    </button> En attente </td>  
  )}
                              

                      {colis.statuRembourcement === "enattente" ? (
    <td>  <button className="btn btn-danger"  >
</button> En attente </td>  
  ) : (
    <td> <button className="btn btn-success"  >Confirmé
    </button>   </td>  
  )}               

                           
                                             
                                             <td>
                       
              
                                       <button type="button" class="btn btn-outline-primary mr-2" >
                                                    Update
                                </button>
                        

                                             </td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}}   className="btn btn-danger" >Delete </button>
                                             </td>
                                         
                                        </tr>
                                    
                                }
                            </tbody>
                        </table>

                 </div>
                
                      </div>{/* /.card-body */}
                    </div>
                  
                    {/*/.direct-chat */}
                    {/* TO DO List */}
          
                   
                    {/* /.card */}
                  </section>
                  {/* /.Left col */}
                  {/* right col (We are only adding the ID to make the widgets sortable)*/}
                
                  {/* right col */}
                </div>
                {/* /.row (main row) */}
              </div>{/* /.container-fluid */}
            </section>



  </div>
  
  );
};

export default SearchFunction;