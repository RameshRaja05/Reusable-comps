import { useState,useEffect,useRef } from "react";
import { GoChevronDown } from 'react-icons/go';
import Panel from "./Panel";
import { optionObj,DropdownProps } from "../types/dropdown";



function Dropdown({ options, onChange, value }:DropdownProps){
  //state for open and close in dropdown
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const divEl=useRef<HTMLDivElement>(null);
 
  useEffect(()=>{
    const handlerClick=(e:MouseEvent)=>{
      if(!(divEl?.current?.contains(e?.target as Node))){
        setIsOpen(false)
      }
    }
    
    document.addEventListener('click',handlerClick,true);
    return ()=>{
      document.removeEventListener('click',handlerClick);
    }
  },[])

  

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen)
  }

  const handleOptionClick = (option: optionObj) => {
    setIsOpen(false)
    onChange(option)
  }

  const renderedOptions = options.map((option) => {
    //hybrid event hanndler
    return <div className="hover:bg-sky-50 rounded cursor-pointer p-1" key={option.value} onClick={() => handleOptionClick(option)}>{option.label}</div>
  })



  return (
    <div ref={divEl} className="w-48 relative">
      {/* optional chaining operator for null values */}
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>{value?.label || 'select.....'} <GoChevronDown /></Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  )
}

export default Dropdown;


//className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"


