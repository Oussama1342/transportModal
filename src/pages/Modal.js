

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
           
           

 

         </div>
  
      </section>
    </div>
  );
};
export default Modal