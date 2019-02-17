import React from "react";
import  "./Topbar.scss";

const topbar = (props) =>(
    <div className="Topbar">
        <div className="TopbarContainer"> 
            <a className="Logo" href="/">ŁB</a>
            <p className="Text">Strona poświecona moim projektom z elektroniki, programowania i fizyki...</p>
        </div>
    </div>
);

export default topbar;