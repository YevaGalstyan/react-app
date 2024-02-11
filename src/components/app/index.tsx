import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home} from '../home';
import Edit from '../edit';

const App: FC = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/edit/:userId" element={<Edit/>}/>
            <Route path="/create" element={<Edit/>}/>
        </Routes>
    )
}

export default App;