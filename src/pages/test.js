import { Component , useState } from "react";


import Modal from 'react-modal';
function Test()   {


    const [modalIsOpen, setModalIsopen] = useState (false)


   
 

 

        return(
         <div>
             <button onClick={() =>setModalIsopen(true)}></button>
           


            

<Modal isOpen={modalIsOpen}  className="container-fluid">
 

<div className="row">
        {/* Left col */}
        <section className="col-lg-7 connectedSortable" >
          {/* Custom tabs (Charts with tabs)*/}
          <div className="card" style={{width:"500px"} ,{marginLeft:"300px"}} >
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-chart-pie mr-1" />
                Liste de  clients
              </h3>
              <div className="card-tools">
              
              </div>
            </div>{/* /.card-header */}
            <div className="card-body">
       <form>
  {/* Email input */}
  <div className="form-row mb-4">
  <div className="col">
  <p className="form-label" htmlFor="form1Example1" >Réference : refclient</p>

  </div>
  <div className="col">
  </div>
  </div>
  {/* Password input */}


 
  




  {/* Submit button */}
</form>

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

</Modal>

         </div>
        )
    

}
export default Test 