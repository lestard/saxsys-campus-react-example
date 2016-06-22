import React from 'react'
import ItemList from './ItemList'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            input: ""
        }
    }

    onInputChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    onAdd = () => {
        const addAction = {
            type: "ADD_ITEM",
            payload: {
                text: this.state.input
            }
        }

        this.props.dispatch(addAction)

        this.setState({
            input: ""
        })
    }

    render() {
        return (
            <div>
                <h1>Items</h1>
                <ItemList items={this.props.items}/>
                <input onChange={this.onInputChange} type="text" value={this.state.input}/>
                <button onClick={this.onAdd}>Add</button>
            </div>
        )
    }
}

export default App
