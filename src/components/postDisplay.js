import React, { Component } from 'react'
import axios from 'axios'

export default class PostDisplay extends Component {
    constructor() {
        super()

        this.state = {
            list: [],
            labor: '',
            cash: 0,
            date: 0,
            edit: null
        }
    }

    componentDidMount() {
        axios.get('/api/getList').then(res => {
            this.setState({ list: res.data })
        })
    }

    handleCash = (e) => {
        this.setState({ cash: e })
    }

    handleDate = (e) => {
        this.setState({ date: e })
    }

    handleLabor = (e) => {
        this.setState({ labor: e })
    }

    saveList = () => {
        var thing = { cashmoney: this.state.cash, stardate: this.state.date, labor: this.state.labor }
        axios.post('/api/saveList', thing).then(res => {
            this.setState({ list: res.data })
        })
    }

    deleteThing = (id) => {
        axios.delete('/api/delete/' + id).then(res => {
            this.setState({ list: res.data })
        })
    }

    editThing = (id) => {
        this.setState({ edit: null })
        var thing = { cashmoney: this.state.cash, stardate: this.state.date, labor: this.state.labor }
        axios.put(`/api/edit/${id}`, thing).then(res => {
            this.setState({list : res.data})
        })
    }

    render() {

        var { list } = this.state

        var listDisplay = list.map(val => {
            if (val.id === this.state.edit) {
                return <div key={val.id}>
                    <input placeholder={val.cashmoney}  onBlur={e => this.handleCash(e.target.value)}/>
                    <input placeholder={val.labor} onBlur={e => this.handleDate(e.target.value)}/>
                    <input placeholder={val.stardate} onBlur={e => this.handleLabor(e.target.value)}/>
                    <button onClick={_ => this.editThing(val.id)}>save edit</button>
                </div>
            }
            return <div key={val.id}>
                <p>{val.cashmoney}</p>
                <p>{val.labor}</p>
                <p>{val.stardate}</p>
                <button onClick={_ => this.setState({ edit: val.id })}>edit</button>
                <button onClick={_ => this.deleteThing(val.id)}>delete</button>
            </div>
        })

        return (
            <div>
                {listDisplay}
                <br />
                add new
                <input placeholder="Cash Money (decimal)" onBlur={e => this.handleCash(e.target.value)} />
                <input placeholder="Star Date (float)" onBlur={e => this.handleDate(e.target.value)} />
                <input placeholder="Labor (text)" onBlur={e => this.handleLabor(e.target.value)} />
                <button onClick={this.saveList}>Save to List</button>

            </div>
        )
    }
}