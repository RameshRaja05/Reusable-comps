/* eslint-disable @typescript-eslint/no-explicit-any */
import {createContext,useState,ReactNode,useEffect} from "react";

type providerProps={
    children:ReactNode;
}

type navigationContextProps={
    navigate?:(to:string)=>void
    currentPath?:string
}

const NavigationContext=createContext<navigationContextProps|any>({});



const NavigationProvider=({children}:providerProps)=>{
    const[currentPath,setCurrentPath]=useState<string>(window.location.pathname)
    useEffect(()=>{
        const handler=()=>{
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate',handler);
        return ()=>{
            window.removeEventListener('popstate',handler)
        }
    },[])

    const navigate=(to:string)=>{
      window.history.pushState({},'',to)
      setCurrentPath(to)
    }

    return(
        <NavigationContext.Provider value={{currentPath,navigate}}>
          {children}
        </NavigationContext.Provider>
    )

}


export {NavigationProvider};
export default NavigationContext;