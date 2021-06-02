
import {  
    Route, Switch, Redirect  
} from 'react-router-dom';  
import React, { Component } from 'react';
import livraisonService from '../services/LivraisonService'
import couliService from '../services/CouliService'
import Modal from './Modal.js';

export class Dashboard2 extends Component {  


  constructor(props) {
    super(props)

    this.state = {
      refCoulis : '',
      nonEmeteur :'',
      addressEmeteur:'',
      numtelEmeteur:0,
      nonRecepteur:'',
      addressRecepteur:'',
      numtelRecepteur: 0,
      bureau : '',
      numReçu :0 ,
      nonChauffeur:'',
      matrCamion:'',
      modePayement:  '',
      remboursement : '',
      montantRemboursement :'',
      montant : '',
      codeClient : 0 ,
      show : false ,
      message : null
    
      

    }
    this.saveCoulis = this.saveCoulis.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
}


changestate(){
}
saveCoulis =(e) =>{
  e.preventDefault();
  let coulis  = {refCoulis : this.state.refCoulis, nonEmeteur : this.state.nonEmeteur , addressEmeteur : this.state.addressEmeteur, numtelEmeteur : this.state.numtelEmeteur , nonRecepteur : this.state.nonRecepteur , 
    addressRecepteur : this.state.addressRecepteur,codeClient :this.state.codeClient , bureau : this.state.bureau,addressRecepteur : this.state.addressRecepteur, modePayement : this.state.modePayement, remboursement : this.state.remboursement ,montantRemboursement: this.state.montantRemboursement, montant : this.state.montant
    } ; 
    couliService.addCoulis(coulis).then(res => {
      this.setState({message : "coulis added with Seccesful"});
      console.log("Coulis Added with Success...");
    })

   
  }

  onChange = (e) =>
  this.setState({ [e.target.name]: e.target.value });

cancel(){
  this.setState({show:true})

}
showModal = () => {
  this.setState({ show: true });
};
hideModal = () => {
  this.setState({ show: false });
};

    render() {  
        return (  
       <div className="content-wrapper">
         <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal>
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Dashboard Colis</h1>
        </div>{/* /.col */}
      
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      {/* Small boxes (Stat box) */}
    
      {/* /.row */}
      {/* Main row */}
      <div className="row">
        {/* Left col */}
        <section className="col-lg-7 connectedSortable">
          {/* Custom tabs (Charts with tabs)*/}
          <div className="card" >
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-chart-pie mr-1" />
                Ajouter Couli
              </h3>
              <div className="card-tools">
              
              </div>
            </div>{/* /.card-header */}
            <div className="card-body">
       <form>
  {/* Email input */}
  <div className="form-row mb-4">
  <div className="col">
  <p className="form-label" htmlFor="form1Example1" >Réference</p>

    <input type="text" id="form1Example1" className="form-control" name="refCoulis" style={{ width: "150px"}} onChange={this.onChange} />
  </div>
  <div className="col">
  </div>
  </div>
  {/* Password input */}
  <div className="form-row mb-4">
  <div className="card" style={{width: '70rem'}}>
  <div className="card-header"> <p>Expéditeur</p></div>
     <div className="card-body"> 
     <div className="form-row mb-4">
     <div className="col"> 
     <div >
        <input className="form-check-input"  type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Client fidel
        </label>
      </div> <br></br><br></br>
      <div >
        <input className="form-check-input"  type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          <p>Client passagé</p> 
        </label>
      </div>
     </div>
     <div className="col">
     <div className="form-row mb-4">
     <div className="col">
       <p>code client</p>       <br></br>
          <p>nom et prenom</p> <br></br>
          <p>Télephone</p> 
        </div>
     
        <div className="col">
        <input type="text" id="form1Example1" className="form-control" name="codeClient" style={{ width: "100px"} ,{ height: "30px"}} onChange={this.onChange} /><br></br>
        <input type="text" id="form1Example1" className="form-control" name="refCoulis" style={{ width: "80px"} ,{ height: "30px"}} onChange={this.onChange} /><br></br>
        <input type="text" id="form1Example1" className="form-control" name="nonEmeteur"  style={{ width: "80px"} ,{ height: "30px"}} onChange={this.onChange} />


        </div>
        <div className="col">
        <button type="button" class="btn btn-dark" onClick={this.showModal}>parcourir</button>
       </div>
     </div>   

     </div>
     </div>



     
    </div> 
</div>

<div className="card" style={{width: '70rem'}}>
  <div className="card-header"> <p>Destinateur</p></div>
     <div className="card-body"> 
     <div className="form-row mb-4">
     <div className="col"> 
     <div style={{ marginLeft: "3px"}}>
      <p>Nom et prénom</p>
      </div> <br></br>
      <div style={{ marginLeft: "3px"}}>
       <p>Tél</p>
      </div><br></br>
      <div style={{ marginLeft: "3px"}}>
       <p>Bureau</p>
      </div>
     </div>
     <div className="col">
     <div className="form-row mb-4">
     <div className="col">
     <input type="text" id="form1Example1" className="form-control" name="refCoulis" style={{ width: "100px"} ,{ height: "30px"}} onChange={this.onChange} />
      <br></br>
             <input type="text" id="form1Example1" className="form-control" name="refCoulis" style={{ width: "100px"} ,{ height: "30px"}} onChange={this.onChange} /><br></br>

             <select name="modePayement"  className="form-control" >
   <option defaultChecked  >Sousse</option>  
   <option ></option> 
   <option  > </option> </select>
        </div>
     
        <div className="col">


        </div>
   
     </div>   

     </div>
     </div>



     
    </div> 
</div>
  </div>
  <div className="form-row mb-4">
  <div className="col">
  <p>Frais de livraison</p>
  </div>
  <div className="col">

    <input type="text" id="form1Example2" className="form-control" name="addressRecepteur" onChange={this.onChange}/><br></br>
    <select name="modePayement"  className="form-control" >
   <option defaultChecked  >espece</option>  
   <option >facture</option> 
   <option  >en attente </option> </select>
  </div>
  <div className="col">

  </div>
  </div>
 
  
  <div className="form-row mb-4">
  <div className="col">
  <p  >Remboursement</p>
  <select name="remboursement"  className="form-control" onChange={this.onChange} style={{ width: "200px"}}>

   <option defaultChecked >Non</option> 
   <option  >Oui</option> 

  </select>    
  </div>  
  {this.state.remboursement === "Oui" ? (
     <div className="col">
     <p >Montant Remboursé</p>
       <input type="text" id="form1Example2" className="form-control" name="montantRemboursement" onChange={this.onChange} style={{ width: "200px"}}/>
     </div>
  ) : (
    null
  )}



 
 

   
  
</div>



  {/* Submit button */}
  <button type="submit" className="btn btn-outline-primary" style={{ marginLeft: '40%'}}  onClick={this.saveCoulis}>Ajouter</button>
</form>

            </div>{/* /.card-body */}
          </div>
        
          {/*/.direct-chat */}
          {/* TO DO List */}

         
          {/* /.card */}
        </section>
        {/* /.Left col */}
        {/* right col (We are only adding the ID to make the widgets sortable)*/}
        <section className="col-lg-5 connectedSortable" >
          {/* Map card */}
          <div className="card bg-gradient-primary" style={{width: '20rem'},{marginRight: '15px'}}>
            <div className="card-header border-0">
              <h3 className="card-title">
                <i className="fas fa-map-marker-alt mr-1" />
                Nos bureaux
              </h3>
              {/* card tools */}
              <div className="card-tools">
                <button type="button" className="btn btn-primary btn-sm daterange" data-toggle="tooltip" title="Date range">
                  <i className="far fa-calendar-alt" />
                </button>
                <button type="button" className="btn btn-primary btn-sm" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            <div className="card-body">
              <div id="world-map" style={{height: 250, width: '100%'}} />
            </div>
            {/* /.card-body*/}
            <div className="card-footer bg-transparent">
              <div className="row">
                <div className="col-4 text-center">
                  <div id="sparkline-1" />
                  <div className="text-white">Visitors</div>
                </div>
                {/* ./col */}
                <div className="col-4 text-center">
                  <div id="sparkline-2" />
                  <div className="text-white">Online</div>
                </div>
                {/* ./col */}
                <div className="col-4 text-center">
                  <div id="sparkline-3" />
                  <div className="text-white">Sales</div>
                </div>
                {/* ./col */}
              </div>
              {/* /.row */}
            </div>
          </div>
          {/* /.card */}
          {/* solid sales graph */}
          <div className="card bg-gradient-info" style={{width: '20rem'}, {marginRight: '15px'}}>
            <div className="card-header border-0">
              <h3 className="card-title">
                <i className="fas fa-th mr-1" />
                Statistique de livraison
              </h3>
              <div className="card-tools">
                <button type="button" className="btn bg-info btn-sm" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn bg-info btn-sm" data-card-widget="remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body" >
              <canvas className="chart" id="line-chart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
            </div>
            {/* /.card-body */}
            <div className="card-footer bg-transparent" style={{width: '20rem'}}>
              <div className="row">
                <div className="col-4 text-center">
                  <div className="text-white">Mail-Orders</div>
                </div>
                {/* ./col */}
                <div className="col-4 text-center">
                  <div className="text-white">Online</div>
                </div>
                {/* ./col */}
                <div className="col-4 text-center">
                  <div className="text-white">In-Store</div>
                </div>
                {/* ./col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
          {/* Calendar */}
         
          {/* /.card */}
        </section>
        {/* right col */}
      </div>
      {/* /.row (main row) */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>


         );
        
        }
    }
    export default Dashboard2