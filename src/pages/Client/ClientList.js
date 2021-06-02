import { Component } from "react";
import Menu from '../Menu'
import Header from '../Header'
import ClientDash from './ClientDash'
export class ClientList  extends Component{

    render(){
        return(
            <div class="wrapper">
                <Menu />,
    <Header />,
    <ClientDash /> 
</div>
 
        )
    }
}

export default ClientList 