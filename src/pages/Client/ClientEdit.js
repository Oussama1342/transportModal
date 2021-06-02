import { Component } from "react";
import Menu from '../Menu'
import Header from '../Header'
import ClientEditDash from './ClientEditDash'
export class ClientEdit extends Component{

    render(){
        return(
            <div className="wrapper">

<Header />,
<Menu />,
<ClientEditDash />

</div>
        )
    }
}

export default ClientEdit