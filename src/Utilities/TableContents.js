import React from 'react';
import "./TableContents.css";

function TableContents({text}) {

    return (
        <table className="table">
            <thead>
                <tr>
                    {text[0].map((text) => {
                        return <th className="table__heading">{text}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {text.filter(text => text[0] !== "").map((text) => {
                    return <tr>
                        <th>{text[0]}</th>
                        <td>{text[1]}</td>
                        <td>{text[2]}</td>
                        <td>{text[3]}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default TableContents
