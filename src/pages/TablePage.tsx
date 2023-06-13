/* eslint-disable @typescript-eslint/no-non-null-assertion */

import SortableTable from '../components/SortableTable';
//Todo give a dynamic types to props

type fruitObj = { name: string; color: string; score: number };

type dataObj = fruitObj[];

function TablePage() {
    const data: dataObj = [
        { name: 'Apple', color: 'bg-red-500', score: 7 },
        { name: 'banana', color: 'bg-yellow-500', score: 6.5 },
        { name: 'orange', color: 'bg-orange-500', score: 8 },
        { name: 'Melon', color: 'bg-green-500', score: 8.4 }
    ];

    const config = [
        {
            label: 'Name',
            render: (fruit: fruitObj) => fruit.name,
            sortValue:(fruit:fruitObj)=>fruit.name
        },
        {
            label: 'Color',
            render: (fruit: fruitObj) => (
                <div className={`p-3 m-2 ${fruit.color!}`} />
            )
        },
        {
            label: 'Score',
            render: (fruit: fruitObj) => fruit.score!,
            sortValue: (fruit: fruitObj) => fruit.score
        }
    ];

    const keyFn = (fruit: fruitObj) => {
        return fruit.name;
    };

    return (
        <>
           <SortableTable data={data} config={config} keyFn={keyFn}/>
        </>
    );
}

export default TablePage;
