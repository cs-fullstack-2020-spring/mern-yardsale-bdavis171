import React, { Component } from 'react';


class AddItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            description: ''
        }
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

    // handle submission
    handleSubmission = async (event) => {
        event.preventDefault();
        let formBody = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        };

        let response = await fetch('/api', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formBody)
        });

        let json = await response.json();
        console.log(json);
        this.setState({
            name: '',
            price: 0,
            description: ''
        })
    }

    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Add An Item</legend>
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
                            <button onClick={this.handleSubmission}>Add Item</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default AddItemForm;