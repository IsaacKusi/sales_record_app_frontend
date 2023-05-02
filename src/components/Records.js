import RecordNav from './RecordItems/RecordNav';
import RecordTableContainer from './RecordItems/RecordTableContainer';
import NewRecord from './RecordItems/NewRecord';
import './Records.css'



const Records = ()=>{
    return <>
     <RecordNav/>
     <NewRecord/>
     <RecordTableContainer/>
    </>
}

export default Records;