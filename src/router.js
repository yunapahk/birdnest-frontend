import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import App from "./App";
import Index from "./pages/Index";
import Show from "./pages/Show";
import Create from "./pages/Create";
import {indexLoader, showLoader} from "./loaders";
import {updateAction, deleteAction} from "./actions";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>
            <Route path="post/:id" element={<Show/>} loader={showLoader}/>
            <Route path="create" element={<Create />}/> 
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    </>
));

export default router;