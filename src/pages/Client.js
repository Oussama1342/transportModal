import React, { Component, Suspense } from 'react';  
 

import {  
    Route, Switch, Redirect  
} from 'react-router-dom';  
import Dashboard from './Dashboard';
import Header from './Header';
import Menu from './Menu' ;
import Footer from './Footer';
import ClientDash from './ClientDash'
export class Client extends Component {  
    render() {  
        return (  
            <div class="wrapper">  
                   <Header />
                   <Menu />
                   <ClientDash />
         < Footer />
            </div>  
        )  
    }  
}  
  
export default Client  