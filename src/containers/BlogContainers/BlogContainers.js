import React, { Component } from "react";
import { Route } from "react-router-dom";

import Topbar from "../../components/Topbar/Topbar";
import DataBlocks from "../../components/DataBlocks/DataBlocks";
import "./BlogContainers.scss";

class BlogContainers extends Component{

    render(){
        return(
            <div  className="BlogContainers">
                <Topbar/>
                <Route path="/" exact render={() => (<DataBlocks/>)}/>
                <Route path="/weather" exact render={() => (<h1>weather page</h1>)}/>
            </div>
        );
    }
}

export default BlogContainers;