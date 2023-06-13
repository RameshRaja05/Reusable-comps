import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';
import Sidebar from './components/SideBar';
import ModalPage from './pages/ModelPage';
import TablePage from './pages/TablePage';
import CountPage from './pages/CountPage';

function App() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <div className="col-span-5">
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/button">
                    <ButtonPage />
                </Route>
                <Route path="/">
                    <DropdownPage />
                </Route>
                <Route path="/modal">
                    <ModalPage />
                </Route>
                <Route path="/table">
                    <TablePage />
                </Route>
                <Route path='/count'>
                   <CountPage initialCount={Math.floor(Math.random()*10)}/>
                </Route>
            </div>
        </div>
    );
}

export default App;
