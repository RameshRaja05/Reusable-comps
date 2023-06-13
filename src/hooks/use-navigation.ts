import { useContext } from "react";
import NavigationContext from "../context/Navigation";


function UseNavigation(){
    return useContext(NavigationContext)
}

export default UseNavigation;