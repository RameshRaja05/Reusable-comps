import {ReactNode} from 'react'

type strOrNum=string|number;


export type configType<DataType> = {
    label: string;
    render: (obj: DataType) => strOrNum | ReactNode;
    sortValue?: (obj: DataType) => strOrNum;
    header?: () => ReactNode;
};

export type tableProps<DataType> = {
    data: Array<DataType>;
    config: Array<configType<DataType>>;
    keyFn: (obj: DataType) => strOrNum;
};
