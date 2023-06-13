import UseNavigation from '../hooks/use-navigation';
import { routeProps } from '../types/route';

function Route({ path, children }: routeProps){
    const { currentPath } = UseNavigation();

    //check which path is active
    const content = currentPath === path ? children : null;
    return <>{content}</>;
}

export default Route;
