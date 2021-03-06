import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddItemForm from './AddItemForm';
import DisplayItem from './DisplayItem';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: []
        }
    }

    componentDidMount = () => {
        this.loadData();
    }

    // load data
    loadData = async () => {
        let response = await fetch('/api');
        let json = await response.json();
        console.table(json);
        this.setState({ itemList: json });
    }

    render() {
        return (
            <div>
                <h1 id="header">Yard Sale App</h1>
                <Router>
                    <Link to='/'>List of Items</Link>
                    <Link to='/api'>Add Item</Link>
                    <Route path='/api'>
                        <AddItemForm/>
                    </Route>
                    {this.state.itemList.map(
                        (item) => {
                            return (
                                <div key = {item._id}>
                                    <Link to={`/api/${item.name}`}>
                                        <div>
                                            <p>{item.name}</p>
                                            <p>Price: ${item.price}</p>
                                        </div>
                                    </Link>
                                    <Route path={`/api/${item.name}`}>
                                        <DisplayItem item={item} />
                                    </Route>
                                    <br/>
                                </div>

                            )
                        }
                    )}
                   
                </Router>
            </div>



        );
    }
}

export default AppContainer;