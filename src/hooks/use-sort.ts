import { useState } from 'react';
import { configType,tableProps } from '../types/table';

type strOrNull = string | null;

function useSort<T>({data,config}:tableProps<T>) {
    // State variables
    const [sortOrder, setSortOrder] = useState<strOrNull>(null);
    const [sortBy, setSortBy] = useState<strOrNull>(null);

    // Handles the click event on a table header
    const setSortColumn = (label: string) => {
        //if sortby not equals to label it follows a own cycle
        // If the sort order is not set, set it to ascending and the sort by value to the label
        // If the sort order is ascending, set it to descending and the sort by value to the label
        // If the sort order is descending, clear the sort order and sort by values
        const sortOrders = [null, 'asc', 'desc'];
        setSortOrder((current) => {
            if (sortBy === label) {
                const orderIndex = sortOrders.indexOf(current);
                return sortOrders[(orderIndex + 1) % 3];
            } else return sortOrders[1];
        });
        setSortBy(label);
    };

    // Sorts the data array based on the sort order and sort by values
    let sortedData = data;
    if (sortOrder && sortBy) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { sortValue }: any = config.find(
            (col: configType<T>) => col.label === sortBy
        );
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            const order = sortOrder === 'asc' ? 1 : -1;
            // Checks if the value is a string or a number
            return typeof valueA === 'string'
                ? valueA.localeCompare(valueB) * order
                : (valueA - valueB) * order;
        });
    }

    return {sortBy,sortOrder,setSortColumn,sortedData}
}

export default useSort;
