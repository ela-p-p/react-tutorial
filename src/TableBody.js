import React from 'react';
const TableBody = (props) => {
    //notice,  no 'this'. props passed through as paramter to function
    //notice characterDa is now property name due to JSX element name from direct parent

    const rows = props.characterDa.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    //this is actual compent function return
    return <tbody>{rows}</tbody>

}

export default TableBody