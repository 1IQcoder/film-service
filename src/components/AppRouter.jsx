import '../styles/App.css'
import { Routes, Route } from "react-router-dom";
import AddActorPage from '../pages/actor/ActorAddPage';
import ActorListPage from '../pages/actor/ActorListPage';
import ActorPage from '../pages/actor/ActorPage';
import NoPage from '../pages/NoPage';
import ActorFindPage from '../pages/actor/ActorFindPage';

function AppRouter() {

  return (
    <Routes>
        <Route path='/'>
          <Route path="/actor">
            <Route index element={<ActorPage />} />
            <Route path='add' element={<AddActorPage />} />
            <Route path='list' element={<ActorListPage />} />
            <Route path='find' element={<ActorFindPage />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
        
      </Routes>
  );
}

export default AppRouter;



