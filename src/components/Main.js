import React, { Component } from 'react'
import HornedBeast from './HornedBeast'



class Main extends Component {
    
  

render() {
    
    console.log(this.props.filteredData);
    return (
        // {
        //     this.state.hornsNum
        // }
        <div className="row">
            {
                this.props.filteredData.map(ele => {
                    return <HornedBeast handleClose={this.props.handleClose}
                    handleOpen={this.props.handleOpen}
                     title={ele.title} 
                     description={ele.description} 
                     image_url={ele.image_url} 
                     keyword={ele.keyword} 
                     horns={ele.horns} />
                })
            }
            
            
            </div>
    )
}
}

export default Main







