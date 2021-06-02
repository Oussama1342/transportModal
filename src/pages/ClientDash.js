import { Component } from 'react';

import ClientService from '../services/ClientService'

export class ClientDash extends Component {  

  

    constructor(props) {
        super(props)
    
        this.state = {
            nomPrenpm : '',
            telClient : 0 ,
            adressClient :'',
            MatriculFiscale :  0
        
          
    
        }
        this.saveClient = this.saveClient.bind(this);
    }
    
    
    saveClient =(e) =>{
      e.preventDefault();
      let client  = {nomPrenpm : this.state.nomPrenpm, telClient : this.state.telClient , adressClient : this.state.adressClient, MatriculFiscale : this.state.MatriculFiscale 
        } ; 
        ClientService.addClient(client).then(res => {
   
          console.log("client Added with Success...");
        })
    
       
      }
    
      onChange = (e) =>
      this.setState({ [e.target.name]: e.target.value });
    
 
    
        render() {  
            return (  
           <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
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
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="fas fa-chart-pie mr-1" />
                    Ajouter Client
                  </h3>
                  <div className="card-tools">
                    <ul className="nav nav-pills ml-auto">
                     
                     
                    </ul>
                  </div>
                </div>{/* /.card-header */}
                <div className="card-body">
           <form>
      {/* Email input */}
    
      <div className="form-row mb-4">
      <div className="col">
      <label className="form-label" htmlFor="form1Example1">Nom et prenom</label>
    
        <input type="text" id="form1Example1" className="form-control" name="nomPrenpm" onChange={this.onChange} />
      </div>
      <div className="col">
      <label className="form-label" htmlFor="form1Example1">Tel</label>
        <input type="text" id="form1Example1" className="form-control" name="telClient" onChange={this.onChange} />
      </div>
      </div>
      {/* Password input */}
      <div className="form-row mb-4">
      <div className="col">
      <label className="form-label" htmlFor="form1Example2">Adreesse  </label>
        <input type="text" id="form1Example2" className="form-control"  name="adressClient" onChange={this.onChange}/>
      </div>
      {/* 2 column grid layout for inline styling */}
      <div className="col">
      <label className="form-label" htmlFor="form1Example2">Matricule Fiscale</label>
        <input type="text" id="form1Example2" className="form-control" name="MatriculFiscale" onChange={this.onChange}/>
      </div>
      </div>
      
     
      
  

    
    
    
      {/* Submit button */}
      <button type="submit" className="btn btn-outline-primary" style={{ marginLeft: '40%'}}  onClick={this.saveClient}>Ajouter</button>
    </form>
    
                </div>{/* /.card-body */}
              </div>
            
              {/*/.direct-chat */}
              {/* TO DO List */}
    
             
              {/* /.card */}
            </section>
            {/* /.Left col */}
            {/* right col (We are only adding the ID to make the widgets sortable)*/}
            <section className="col-lg-5 connectedSortable">
              {/* Map card */}
              <div className="card bg-gradient-primary">
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
              <div className="card bg-gradient-info">
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
                <div className="card-body">
                  <canvas className="chart" id="line-chart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
                </div>
                {/* /.card-body */}
                <div className="card-footer bg-transparent">
                  <div className="row">
                    <div className="col-4 text-center">
                      <input type="text" className="knob" data-readonly="true" defaultValue={20} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                      <div className="text-white">Mail-Orders</div>
                    </div>
                    {/* ./col */}
                    <div className="col-4 text-center">
                      <input type="text" className="knob" data-readonly="true" defaultValue={50} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                      <div className="text-white">Online</div>
                    </div>
                    {/* ./col */}
                    <div className="col-4 text-center">
                      <input type="text" className="knob" data-readonly="true" defaultValue={30} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
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

export default ClientDash 