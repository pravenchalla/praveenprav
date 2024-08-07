import {useState} from 'react'
import axios from 'axios'

function CreateTodo () {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const onClick = async () => {
        const payload = {
            title: title,
            description: description
        }
        const response = await axios.post('http://localhost:4561/prave/create', payload)
        console.log(response)
    }

    return(
        <div>
            <div>
            <p>Enter Todo Title</p>
            <input type="text" value={title} onChange={handleTitleChange}></input>
            </div>
            <div>
            <p>Enter Todo Title</p>
            <input type="text" value={description} onChange={handleDescriptionChange}></input>
            </div>
            <button onClick={onClick}>CREATE</button>
        </div>
    )
}

export default CreateTodo;