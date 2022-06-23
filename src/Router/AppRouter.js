import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Home from '../Pages/Home';
import Schedule from '../Pages/Schedule';

const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/Schedule' element={<Schedule/>}/>
            </Routes>
        </Router>
        
    )
}

export default AppRouter;