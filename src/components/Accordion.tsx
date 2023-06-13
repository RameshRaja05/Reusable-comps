import { useState } from 'react';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';
import { AccordionProps } from '../types/accordion';


//accordion component
function Accordion({ items }:AccordionProps){
    //state for expanding selection initially it refers the -1 coz everyaccordion element must be closed
    const [expandedIndex, setExpandedIndex] = useState<number>(-1);

    //event handler
    const handleClick = (index: number) => {
        //functional version of state
        setExpandedIndex((currentExpandedIndex: number) => {
            if (currentExpandedIndex === index) {
                return -1;
            } else {
                return index;
            }
        });
    };

    //map to loop over the list
    const accordionlist = items.map((item, index) => {
        //check which section is currently being open
        const isExpanded = index === expandedIndex;

        const icon = (
            <span className="text-2xl">
                {/* icon for expanded and collapsed section */}
                {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
        );

        return (
            <div key={item.id}>
                <div
                    className="flex p-3 items-center bg-gray-500 border-b cursor-pointer text-gray-200 justify-between"
                    onClick={() => handleClick(index)}
                >
                    {item.label}
                    {icon}
                </div>
                <div
                    className={`accordion-content transition-max-height overflow-hidden duration-500 ease-in-out ${
                        isExpanded ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    {isExpanded && (
                        <div className="border-b p-5">{item.content}</div>
                    )}
                </div>
            </div>
        );
    });

    return <div className="border-x border-t rounded">{accordionlist}</div>;
}

export default Accordion;
