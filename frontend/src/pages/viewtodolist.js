import {useState} from 'react'
import axios from 'axios'

function ViewTodoList () {
    const [todoList, setTodoList] = useState([])

    const fetchTodoList = async () => {
        const response = await axios.get('http://localhost:4561/prave/data')

        if(response.data.success === true) {
            setTodoList(response.data.data)
        }else{
            alert(response.data.message)
        }
    }

        console.log('print all the list', todoList)
    return(
        <div>
            <h1>Todo List</h1>
            <button onClick= {fetchTodoList}>VIEW</button>

            {
                todoList.length > 0 &&
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                </tr>
            }

            {
                todoList.map((todo,index) => {
                    return(
                        <tr key={index}>
                            <td>todo._id</td>
                            <td>todo.title</td>
                            <td>todo.description</td>
                        </tr>
                    )
                })
            }

        </div>
    )
}

export default ViewTodoList;