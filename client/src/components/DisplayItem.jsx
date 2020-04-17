import React, { Component } from 'react';

class DisplayItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // handle delete
    handleDelete = async (event) => {
        let response = await fetch(`/api/${this.props.item.name}`  , {
            method: "DELETE",
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }

        })
    }

    render() { 
        
        return ( 
            <div>
               <p>{this.props.item.description}</p>
               <button onClick={this.handleDelete}>Delete</button>
            </div>
         );
    }
}
 
export default DisplayItem;