
import SortableTable from "../components/SortableTable";

type carObj={model:string,year:number,country:string};

type dataObj=carObj[];


function TablePage2(){
    const data:dataObj=[
        {model:'Ford Mustang',year:2012,country:'USA'},
        {model:'Audi A5',year:2018,country:'Germany'},
        {model:'Lambo F5',year:2017,country:'Germany'}
    ];
    const config=[
        {label:'name',render:(obj:carObj)=>obj.model},
        {label:'Year',render:(obj:carObj)=>obj.year},
        {label:'Country',render:(obj:carObj)=><p><a>{obj.country.toUpperCase()}</a></p>}
    ];

    const keyFn=(obj:carObj)=>{
        return obj.model
    }

    return (
        <>
        <SortableTable data={data} config={config} keyFn={keyFn}/>
        </>
    )
}

export default TablePage2;