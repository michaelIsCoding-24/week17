export default function HelpPage(){
    return(
        <>
        <h2 className="mx-2">Adding a task</h2>
        <div className="py-2 mx-2">
            Adding a task is easy! All you have to do is type your task into the 
            text input, check whether or not you want to prioritize that task, 
            then hit the <button className="btn btn-primary mx-1">Add Entry</button>
            button or press enter!
        </div>
        <h2 className="mx-2">Tracking a task</h2>
        <div className="py-2 mx-2">    
            If you decide you want to track a task after submitting it, 
            you can simply click the <button className="btn btn-success">Track Task</button>
            button to add the Tracked Tag (❗). 
        </div>
        <h2 className="mx-2">Deleting a task</h2>
        <div className="py-2 mx-2">
            When you finish a task, or simply wish to delete it, click the 
            <button className="btn btn-outline-danger">X</button>
            button on the far right. This will delete a task forever, so if you want to 
            bring it back you'll have to create a new task. 
        </div>
        </>
    )
}