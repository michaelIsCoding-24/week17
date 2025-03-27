export default function About(){
    return(
        <>
        <h1 className="text-center py-3 mx-2 border-bottom border-danger">
            This is a simple yet effective app that allows YOU to track any important tasks
            you need finished.
        </h1>
        <p className="text-center mx-2">
            It all started back in 1927, when the Great Task Boom began. 
            There were so many tasks, but no one knew how to keep track of them all.
            Thankfully, John Taskmanager came along to save the day. That's what inspired this
            incredible app. To this day, Mr. Taskmanager's legacy lives on. If you wish to support
            this app, paypal me (John Taskmanager the IV) $11.79 so I can get a double cheeseburger. 
        </p>
        <div className="text-center">
            <img src="\src\assets\istockphoto-57519936-612x612.jpg" 
            alt="A man with a surprised look on his face."
            className="mx-auto"/>
        </div>
        <p className="fst-italic text-center">John Taskmanager, 1929</p>

        </>
    )
}