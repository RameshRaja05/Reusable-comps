import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
type strOrNull = string | null;

type getIconsProps={
    label: string, 
    sortBy: strOrNull, 
    sortOrder: strOrNull
}

const GetIcons = ({label,sortBy,sortOrder}:getIconsProps) => {
    const twoIcons = (
        <>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </>
    );
    if (label !== sortBy) {
        return <div>{twoIcons}</div>;
    }
    if (sortOrder === 'asc') {
        return (
            <div>
                <GoArrowSmallDown />
            </div>
        );
    } else if (sortOrder === 'desc') {
        return (
            <div>
                <GoArrowSmallUp />
            </div>
        );
    } else {
        return <div>{twoIcons}</div>;
    }
};

export default GetIcons;