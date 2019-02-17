import React, { Component } from 'react';
import axios from "axios";

import "./DataBlocks.scss";
import DataBlock from "./DataBlock/DataBlock";

const API_URL = "https://bogusz-blog.herokuapp.com/v1/posts";

let someText= `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dapibus purus velit, 
sit amet ultricies purus condimentum non. Aliquam dapibus interdum odio id elementum.
 Suspendisse suscipit ante enim, eget semper nunc semper eget. Proin sit amet purus 
 at mauris varius hendrerit et ut dolor. Cras ut leo sit amet metus scelerisque rutrum sed vel erat. 
 Vestibulum nec fringilla elit. Curabitur semper magna tempus tempor aliquam. Nunc tellus lectus, 
 mattis eget tortor vel, pellentesque imperdiet mi. Aliquam erat volutpat. Nam porta pulvinar luctus. 
 Vivamus non neque eget dolor ornare aliquam. Praesent eu sem est. Nam consectetur consequat eros eu maximus.`

const color = "#b0b4ba";

class DataBlocks extends Component {
    state = { 
        data: [
            {id:10, title: "przyklad", alt: "Picture1", desc: someText, bckColor: color},
            {id:12, title: "przyklad2", alt: "Picture2", desc: someText, bckColor: color},
        ],
        loaded: false, 
     }

    async componentDidMount()
    {
       let dataTable =[...this.state.data];
       
       let count = await axios.get(`${API_URL}/count`)
       .then((result) =>{
           let {data: {COUNT}} = result;
            return COUNT;
       })
       .catch((errorMes) =>{
           console.log(errorMes);
           return 0;
       });

       for(let i=1; i <= count; i++ )
        {
           await axios.get(`${API_URL}/${i}`)
            .then((blockData) =>{
                let {data:{id, title, desc}} = blockData;
                let newBlock ={
                    id: id,
                    title: title,
                    desc: desc,
                    srcPicture: blockData.data["img-scr"],
                    bckColor: blockData.data["background-color"],
                }
                console.log(blockData);
                dataTable.unshift(newBlock);
            })
            .catch((errorMes)=>{
                console.log("Can't load data");
            });
        }

       if(!this.state.loaded)
       {
            this.setState( {loaded: true} );
            this.setState( {data: dataTable} );
       }
    }
    render() {
        const dataBlocksViews = this.state.data.map((currentEl, index) =>{
            return <DataBlock title={currentEl.title} 
                        key={index}
                        alt={currentEl.alt} 
                        desc={currentEl.desc} 
                        bckColor={currentEl.bckColor}
                        srcPicture={currentEl.srcPicture}/>;
        });

        return (  
            <div className="DataBlocks">
                {dataBlocksViews}
                {/* <DataBlock title="title1" alt="Picture1" desc={someText} bckColor={color}/>
                <DataBlock title="title2" alt="Picture2" desc={someText} bckColor={color}/>
                <DataBlock title="title3" alt="Picture3" desc={someText} bckColor={color}/>
                <DataBlock title="title4" alt="Picture4" desc={someText} bckColor={color}/>
                <DataBlock title="title5" alt="Picture5" desc={someText} bckColor={color}/> */}
            </div>
        );
    }
}
 
export default DataBlocks;