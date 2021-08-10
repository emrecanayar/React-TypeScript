import React, { useState } from 'react'
import { IAppState as Props } from '../App'


interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>

}


const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: "",
    })


    const handleChange = (e: any): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.name || !input.note) {

            return
        }

        setPeople([
            ...people, {
                name: input.name,
                age: input.age,
                url: input.img,
                note: input.note
            }
        ])
    }


    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Ad"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="text"
                placeholder="Yaş"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}
                name="age"
            />
            <input
                type="text"
                placeholder="Resim Url"
                className="AddToList-input"
                value={input.img}
                onChange={handleChange}
                name="img"
            />
            <textarea
                placeholder="Not"
                className="AddToList-input"
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}>Ekle</button>
        </div>
    )
}
export default AddToList;
