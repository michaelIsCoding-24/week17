import Item from "./Item"
import type { ListProps } from "./types"

function List({data, loading, error, deleteTask, updateTrackStatus}: ListProps){
    return (
        <div className="col-9 pt-3">
        <table className="table table-responsive table-striped">
            <thead>
                <tr>
                    <th className="fs-1">
                        Things To Do: {loading ? "Loading..." : ""}
                    </th>
                </tr>
            </thead>
            <tbody>
                    {error && <tr><td>{error}</td></tr>}
                    {data.map(data => 
                    <tr key={data.id}>
                        <Item item={data} deleteTask={deleteTask} 
                        updateTrackStatus={() => updateTrackStatus(data.id, data)}/>
                    </tr>)}
            </tbody>

        </table>
        </div>
    )
}

export default List