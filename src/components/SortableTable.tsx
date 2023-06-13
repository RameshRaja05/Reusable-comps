import { tableProps } from '../types/table';
import useSort from '../hooks/use-sort';
import GetIcons from './GetIcons';
import Table from './Table';

export default function SortableTable<T>(props: tableProps<T>) {
    const { config } = props;

   // Get the sorting logic from the useSort hook
    const { sortBy, sortOrder, setSortColumn, sortedData } = useSort(props);

    // Updates the config array to include a header for each column that can be clicked to sort the data
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => (
                <th
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => setSortColumn(column.label)}
                >
                    <div className="flex items-center">
                        <GetIcons
                            label={column.label}
                            sortBy={sortBy}
                            sortOrder={sortOrder}
                        />
                        {column.label}
                    </div>
                </th>
            )
        };
    });

    // Returns the Table component with the updated data and config arrays
    return (
        <>
            <Table {...props} data={sortedData} config={updatedConfig} />
        </>
    );
}
