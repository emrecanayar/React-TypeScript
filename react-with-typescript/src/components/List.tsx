import React from 'react'
import {IAppState as IProps} from '../App'


const List = ({ people }: IProps) => {

    const renderList = () => {
        return people.map((person) => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.url} />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} yaşında</p>
                    <p className="List-note"> {person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>

    )
}

export default List;