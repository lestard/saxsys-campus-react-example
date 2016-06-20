import React from 'react'
import {v4 as uuid} from 'uuid'
import ItemList from './ItemList'

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            items: [
                {
                    id: uuid(),
                    text: "Hello"
                },
                {
                    id: uuid(),
                    text: "Welt"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Items</h1>
                <ItemList items={this.state.items}/>
                <input type="text" value={this.state.input}/>
                <button>Add</button>
            </div>
        )
    }
}

export default App
