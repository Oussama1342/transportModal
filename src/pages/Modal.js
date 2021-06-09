

import './Modal.css';
import React, { useState, useEffect } from "react";
import CouliService from '../services/CouliService'
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  
  let history = useHistory();
  const { id } = useParams();

  const [colis, setColis] = useState({
    refCoulis : '',
    nonEmeteur :'',
    addressEmeteur :'',
    nonRecepteur:'',
    montant : 0,
   
});

const { refCoulis, nonEmeteur, addressEmeteur,numtelEmeteur, nonRecepteur,addressRecepteur,numtelRecepteur,bureau, montant, modePayement ,remboursement } = colis;

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
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="modal-header">
           <p>Modifier Colis</p>
         </div>
         <div className="modal-body">
           
         <div className="card-body">
         <form onSubmit={e => onSubmit(e)}>
    {/* Email input */}
  
    <div className="form-row mb-4">
    <div className="col">
    <label className="form-label" htmlFor="form1Example1">Réference</label>
  
      <input type="text" id="form1Example1" className="form-control" name="refCoulis"   name="refCoulis"
              value={refCoulis}
              onChange={e => onInputChange(e)} />
    </div>
    <div className="col">
    <label className="form-label" htmlFor="form1Example1">Nom Emetteur</label>
      <input type="text" id="form1Example1" className="form-control" name="nonEmeteur"    name="nonEmeteur"
              value={nonEmeteur}
              onChange={e => onInputChange(e)} />
    </div>
    </div>
    {/* Password input */}
    <div className="form-row mb-4">
    <div className="col">
    <label className="form-label" htmlFor="form1Example2">Adreesse Emetteur </label>
      <input type="text" id="form1Example2" className="form-control"  name="addressEmeteur"   name="addressEmeteur"
              value={addressEmeteur}
              onChange={e => onInputChange(e)} />
    </div>
    {/* 2 column grid layout for inline styling */}
    <div className="col">
    <label className="form-label" htmlFor="form1Example2">Téléphone Emetteur</label>
      <input type="text" id="form1Example2" className="form-control" name="numtelEmeteur"     name="numtelEmeteur"
              value={numtelEmeteur}
              onChange={e => onInputChange(e)} />
    </div>
    </div>
    <div className="form-row mb-4">
    <div className="col">
    <label className="form-label" htmlFor="form1Example2">Nom Recepteur</label>
      <input type="text" id="form1Example2" className="form-control" name="nonRecepteur"   name="nonRecepteur"
              value={nonRecepteur}
              onChange={e => onInputChange(e)}/>
    </div>
    <div className="col">
    <label className="form-label" htmlFor="form1Example2">Adresse Recepteur</label>
  
      <input type="text" id="form1Example2" className="form-control" name="addressRecepteur"  name="addressRecepteur"
              value={addressRecepteur}
              onChange={e => onInputChange(e)} />
    </div>
    </div>
    <div className="form-row mb-4">
    <div className="col">
    <label className="form-label" htmlFor="form1Example2">Téléphone Recepteur</label>
      <input type="text" id="form1Example2" className="form-control" name="numtelRecepteur" name="numtelRecepteur"
              value={numtelRecepteur}
              onChange={e => onInputChange(e)} />
    </div>
    <div className="col">
    <label className="form-label" htmlFor="form1Example2">Bureau</label>
      <input type="text" id="form1Example2" className="form-control" name="bureau"  name="bureau"
              value={bureau}
              onChange={e => onInputChange(e)} />
    </div>
  
    </div>
    
    <div className="form-row mb-4">
    <div className="col">
    <label className="form-label" htmlFor="form1Example2">Montant Livraison</label>
      <input type="text" id="form1Example2" className="form-control" name="montant"  name="montant"
              value={montant}
              onChange={e => onInputChange(e)}
            /> 
    </div>
    <div className="col">
    <label className="form-label" htmlFor="form1Example2">Mode de Payement</label>
    <select name="modePayement"  className="form-control" >
     <option defaultChecked >Espece</option>  
     <option  >Facture</option> 
  
    </select>    
    </div>
    </div>
    <div className="form-row mb-4">
    <div className="col">
    <label className="form-label" htmlFor="form1Example2">Remboursement</label>
    <select name="remboursement"  className="form-control" >
  
     <option defaultChecked >Non</option> 
     <option  >Oui</option> 
  
    </select>    
    </div> 

     {{remboursement} === "Oui" ? (
       <div className="col">
       <label className="form-label" htmlFor="form1Example2">Montant Remboursé</label>
         <input type="text" id="form1Example2" className="form-control" name="montantRemboursement" />
       </div>
    ) : (
      null
    )} 
  
  
  
  </div>
  
  
  
    {/* Submit button */}
    <button type="submit" className="btn btn-outline-primary" style={{ marginLeft: '40%'}}  >Ajouter</button>
  </form>
  
              </div>

 

         </div>
  
      </section>
    </div>
  );
};
export default Modal