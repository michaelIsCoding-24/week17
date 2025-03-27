import type { ItemProps } from "./types"

// sends that component to the main Item function to export
function ItemTrackCheck({item}: {item: {text: string, tracked: boolean}}){
    if(item.tracked === true){
        return(<>❗{item.text}</>)
    } else {
        return (<>{item.text}</>)
    }
}

export default function Item({item, deleteTask, updateTrackStatus}: ItemProps){
    return(
        <td key={item.id}>
        <ItemTrackCheck item={item}/>
        <button className="btn btn-outline-danger float-end" onClick={() => deleteTask(item.id)}>X</button>
        <button className="btn btn-success float-end" onClick={() => updateTrackStatus(item.id)}>Track Task</button>
        </td>
    )
};

