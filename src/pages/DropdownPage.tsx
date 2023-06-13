import { useState } from 'react';
import DropDown from '../components/DropDown';

const items = [
    { label: 'red', value: 'red' },
    { label: 'green', value: 'green' },
    { label: 'blue', value: 'blue' },
    { label: 'pink', value: 'pink' }
];
type optionObj = { label: string; value: string };

function DropDownPage() {
    const [selection, setSelection] = useState<null | optionObj>(null);

    const handleSelect = (option: optionObj) => {
        setSelection(option);
    };

    return (
        <>
            <DropDown
                options={items}
                onChange={handleSelect}
                value={selection}
            />
        </>
    );
}

export default DropDownPage;
