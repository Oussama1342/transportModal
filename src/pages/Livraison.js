import {  
  Route, Switch, Redirect  
} from 'react-router-dom';  
import React, { Component } from 'react';
import livraisonService from '../services/LivraisonService'
import couliService from '../services/CouliService'
import { Link } from "react-router-dom";

export class Livraison extends Component {  


constructor(props) {
  super(props)
  var today = new Date(),

  date = today.getDate()  + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  this.state = {
    coulis : [] ,
    coulisse : null ,
    chefval : '',
    matval :'' ,
    refval :'',
    refCoulis : '',
    nonEmeteur :'',
    addressEmeteur:'',
    numtelEmeteur:0,
    nonRecepteur:'',
    addressRecepteur:'',
    numtelRecepteur: 0,
    numReçu :0 ,
    colisreflist:[],
    
   
    remboursemant: false ,
    modepayement:  ' ',
    message : null,
    


    //Livraison/////
    refLivraison : '',
    nonChauffeur:'',
    matrCamion:'',
    bureau : '',
    referencecolis :'',
    datelivraison : '',
    currentDateTime: date 


  }
  this.onSubmit = this.onSubmit.bind(this);
  this.getCoulis = this.getCoulis.bind(this);
  this.saveLivraison = this.saveLivraison.bind(this);
}


onSubmit(e){
  e.preventDefault();

console.log(this.state.chefval);
 console.log(this.state.matval);
console.log(this.state.refval);


}


getCoulis(){


couliService.getCoulisByReference(this.state.referencecolis).then((res)=>{
// this.setState({colisreflist : res.data})
if(this.state.colisreflist.includes(res.data)){
  console.log("element exist")
}
else{
 this.state.colisreflist.push(res.data)
  console.log(this.state.colisreflist)
}
});

//console.log("tessssssssssssssst first")
//this.state.colisreflist.push(this.state.referencecolis)
//console.log(this.state.colisreflist)
}




saveLivraison =(e) =>{
e.preventDefault();

let livraison  = {refLivraison : this.state.refLivraison, nonChauffeur : this.state.nonChauffeur, bureau : this.state.bureau  ,matCamion : this.state.matCamion ,colis : this.state.colisreflist }

; 
  livraisonService.addlivraisoncolis(livraison).then(res => {
    this.setState({message : "Livraison added with Seccesful"});
    console.log(res.data);
  })

 
}

onChange = (e) =>
this.setState({ [e.target.name]: e.target.value });



  render() {  
      return (  
     <div className="content-wrapper">
{/* Content Header (Page header) */}

{/* /.content-header */}
{/* Main content */}
<section className="content">
  <div className="container-fluid">
    {/* Small boxes (Stat box) */}
  
    {/* /.row */}
    {/* Main row */}
    <div className="row">
      {/* Left col */}
      <section >
        {/* Custom tabs (Charts with tabs)*/}
        <div className="card" style={{width:'500px'}}>
          <div className="card-header">

          <div className="form-row mb-4">
          <div className="col">  <img src="/dist/img/transport.png"   style={{ width: '100px' }, { height: '100px' }  }  /></div>
          <div className="col">  <p>Societe Transport express</p>
                                <p>Adresse : </p>
                                <p>Tel : </p>
                                <p>Fax : </p>
          </div>

          </div>
            <h3 className="card-title">
              <i className="fas fa-chart-pie mr-1" />
              Bon de lovraison
            </h3>
          
          </div>{/* /.card-header */}
          <div className="card-body">

{/* Email input */}

<div className="form-row mb-4">


<div className="col">
<p>BL :</p></div>

<div className="col">

  <div className="col">
 <p>Date : { this.state.currentDateTime }</p>


</div>
</div>
</div>

<div className="form-row mb-4">


<div className="col">

 <p>Chauffeur</p> <input type="text" id="form1Example1" value={this.state.nonChauffeur} className="form-control" id="ref" name="nonChauffeur" onChange={e => this.setState({nonChauffeur: e.target.value}) } />
  </div>

  <div className="col">
  <p>Camion</p><input type="text" id="form1Example1"  className="form-control" id="ref" name="matCamion" value={this.state.matCamion} onChange={e => this.setState({matCamion: e.target.value}) } />


  </div>
  </div>

<div className="form-row mb-4">
<div className="col">
<p>Ref colis </p><input type="text" id="form1Example1"  className="form-control" id="ref" name="referencecolis" onClick={this.getCoulis}  value={this.state.referencecolis} onChange={e => this.setState({referencecolis: e.target.value}) } />
</div>
<div className="col">
<p>Bureau </p><input type="text" id="form1Example1"  className="form-control" id="ref" name="bureau"  value={this.state.bureau} onChange={e => this.setState({bureau: e.target.value}) } />
</div>
</div>
<br></br><br></br>
<table className = "table table-striped table-bordered">

                          <thead>
                          <tr >
                           
                                  <th> Réference</th>
                    
                                  <th> Expediteur</th>
                                  <th> Recepteur</th>
                                
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  this.state.colisreflist.map(
                                      coli => 
                                      <tr key = {coli.refCoulis}>

                             <td>{coli.refCoulis} </td>  
                     
                             <td>{coli.nonEmeteur} / {coli.numtelEmeteur} </td> 

                             <td>{coli.nonRecepteur}  / {coli.numtelRecepteur}</td>    
                     
                         
                                           
                                   
                                        
                                       
                                      </tr>
                                  )
                              }
                          </tbody>
                      </table>




{/* Submit button */}





          </div>{/* /.card-body */}
          <div > 


<button type="submit" className="btn btn-outline-primary" style={{ marginLeft: '10em' } }  onClick={this.saveLivraison} >Ajouter</button>

<Link to={`/findlivraison/${this.state.refLivraison}`}>
<button type="submit" className="btn btn-outline-primary" style={{ marginLeft: '20em'} }>Imprimer</button>
</Link>

<div>



</div>
</div>

        </div>


       
      
        {/*/.direct-chat */}
        {/* TO DO List */}
       
        {/* /.card */}
      </section>
      <br></br><br></br>
      {/* /.Left col */}
      {/* right col (We are only adding the ID to make the widgets sortable)*/}
 
      {/* right col */}
    </div>
    {/* /.row (main row) */}
  </div>{/* /.container-fluid */}
</section>
{/* /.content */}








{/* /.content-header */}
{/* Main content */}

{/* /.content */}
</div>
















       );
      
      }
  }
  export default Livraison