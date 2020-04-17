import React, { Component } from 'react';

class DisplayItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: this.props.item.name,
            price: this.props.item.price,
            description: this.props.item.description,
            doesUpdate: false
         }
    }

    // handle delete
    handleDelete = async (event) => {
        this.setState({doesUpdate: false});
        let response = await fetch(`/api/${this.props.item.name}`  , {
            method: "DELETE",
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }

        });
    }

    // when update button is clicked
    willUpdate = (event) => {
        this.setState({doesUpdate: true});
    }

     // handle changes
     handleChanges = (event) => {
        if (event.target.name === 'name') {
            this.setState({ name: event.target.value });
        }
        else if (event.target.name === 'price') {
            this.setState({ price: event.target.value });
        }
        else if (event.target.name === 'description') {
            this.setState({ description: event.target.value });
        }
    }

    // handle update
    handleUpdate = async (event) => {
        event.preventDefault();
        let formBody = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        };
        
        let response = await fetch(`/api/${this.props.item.name}`, {
            method: "PUT",
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formBody)
        });
        this.setState({doesUpdate: false});
    }

    render() { 
        let updateForm;
        if (this.state.doesUpdate){
            updateForm = <div>
<form action="">
                    <fieldset>
                        <legend>Update Item</legend>
                        <div className="formGroup">
                            <label htmlFor="name">Name: </label>
                            <input type="text" name='name' id='name' value={this.state.name} onChange={this.handleChanges} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="price">Price:</label>
                            <input type="number" name='price' id='price' value={this.state.price} onChange={this.handleChanges} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" value={this.state.description} onChange={this.handleChanges} cols="30" rows="10"></textarea>
                        </div>

                        <div className="formGroup">
                            <button onClick={this.handleUpdate}>Update Item</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        }
        else {
            updateForm=<button onClick={this.willUpdate}>Edit</button>
        }
        return ( 
            <div>
               <p>{this.props.item.description}</p>
               <button onClick={this.handleDelete}>Delete</button>
               {updateForm}
            </div>
         );
    }
}
 
export default DisplayItem;