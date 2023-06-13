import { Fragment } from 'react';
import { tableProps, configType } from '../types/table';

function Table<T>({ data, config, keyFn }: tableProps<T>) {
    const renderHeaders = config.map((headerCol: configType<T>) => {
        //check column has header property
        if (headerCol.header) {
            return (
                <Fragment key={headerCol.label}>{headerCol.header()}</Fragment>
            );
        }
        return <th key={headerCol.label}>{headerCol.label}</th>;
    });

    const renderedRows = data.map((rowData) => {
        //columns
        const renderedColumns = config.map((column) => {
            return (
                <td key={column.label} className="p-3">
                    {column.render(rowData)}
                </td>
            );
        });

        return (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedColumns}
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-5">
            <thead>
                <tr className="border-b-2">{renderHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
}

export default Table;
