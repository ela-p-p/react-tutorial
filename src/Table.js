import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

class Table extends Component {
    render() {
        const {characterData, removeCharacter} = this.props
        //need 'this' because props not defined as a parameter in the class
        //is the same as above. const characterData = this.props.characterData
        //es6 shorthand to define an object who's keys are the same name as variables passed in as properties
        //const characterData = characters ---original from App (parent)    
        //         prop = {
        //             characterData: characterData
        //         }
        return (
            <table>
                <TableHeader />
                <TableBody characterDa={characterData} removeCharacter={removeCharacter} />
            {/* characterDa is just name of property (JSX attribute), characterData here is 'characters' variable passed through the props*/}
            </table>
        )
    }
}

export default Table