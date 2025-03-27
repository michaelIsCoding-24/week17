import { useEffect, useState } from "react";
import InputBar from "./InputBar";
import List from "./List";
import { Task } from "./types";

function App() {
    //test data in state
    const [data, setData] = useState<Task[]>( [] )
    const [taskText, setTaskText] = useState("")
    const [taskTracked, setTaskTracked] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<null | string>(null)
  
  
  // first render fetches data, then renders again with proper data
  useEffect(() => {
    const asyncFunction = async () => {
      // loading text
      setLoading(true)
     
      // looking out for any errors/fetch failures
      try {
      const response = await fetch("http://localhost:3000/tasks")
      if(!response.ok){
        setError("Oh no! Something went wrong: " + response.statusText)
      } else {
      const data = await response.json()
      setData(data)
      setError(null)
      }

      } catch(error: any) {
        setError("Oh no! Something went wrong: " + error.message)
      }
      setLoading(false)
    }
    asyncFunction();
  }, []) // one run (twice on dev mode) then render

  // adds the task given below, made async for back end
  const addTask = async (task: string, tracking: boolean) => {
    const createNewTask = {
      id: data.length + 1,
      text: task,
      tracked: tracking
    }

    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      body: JSON.stringify(createNewTask),
      headers: {"Content-Type": "application/json"}
    })
    const newTask = await response.json()

    setData([ ...data, newTask])
  }

  //deletes the selected task
  const deleteTask = async (idToDelete: number) => {
    await fetch("http://localhost:3000/tasks/" + idToDelete, {
      method: "DELETE", //delete
    });
    setData(data.filter(d => d.id !== idToDelete))
  }

  // when clicked, updates a task's "tracked" status using a boolean
  const updateTrackStatus = async (idToUpdate: number, task: Task) => {
    // flips the boolean on the back end
    await fetch("http://localhost:3000/tasks/" + idToUpdate, {
      method: "PATCH",
      body: JSON.stringify({
        tracked: !task.tracked
      }),
      headers: {"Content-Type": "application/json"}
    });
    
    setData(data.map(data => (
      data.id !== idToUpdate ? data : {
        ...data,
        tracked: !data.tracked
      }
    )))
  }
  //the main return code that displays the app
  return (
    <div className="container">
      <div className="row justify-content-center">
        <List 
        data={data} 
        loading={loading} 
        error={error} 
        deleteTask={deleteTask} 
        updateTrackStatus={(idToUpdate: number, task: Task) => updateTrackStatus(idToUpdate, task)}
        />
      </div>
      <div className="row justify-content-center">
        <InputBar 
          addTask={(task: string, tracking: boolean) => addTask(task, tracking)} 
          taskText={taskText}
          taskTracked={taskTracked}          
          setTaskText={setTaskText} 
          setTaskTracked={setTaskTracked}
          />
      </div>
    </div>

  )
}
export default App
