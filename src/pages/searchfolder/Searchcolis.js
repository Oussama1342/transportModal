import { Component } from "react";
import Menu from '../Menu'
import Header from '../Header'
import SearchFunction from './SearchFunction'

export class Searchcolis  extends Component{

    render(){
        return(
            <div class="wrapper">
                   <Header />,
                   <SearchFunction />
                <Menu />
          
</div>
 
        )
    }
}

export default Searchcolis 