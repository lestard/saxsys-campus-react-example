import React from 'react'
import {v4 as uuid} from 'uuid'
import ItemList from './ItemList'

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            items: [],
            input: ""
        }
    }

    onInputChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    onAdd = () => {
        const newItem = {
            id: uuid(),
            text: this.state.input
        }

        let newItems = [
            ...this.state.items,
            newItem
        ]

        this.setState({
            input: "",
            items: newItems
        })
    }

    render() {
        return (
            <div>
                <h1>Items</h1>
                <ItemList items={this.state.items}/>
                <input onChange={this.onInputChange} type="text" value={this.state.input}/>
                <button onClick={this.onAdd}>Add</button>
            </div>
        )
    }
}

export default App
