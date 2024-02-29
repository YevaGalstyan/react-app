import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './style.css'
import Admin from '../admin/admin';
import Movies from '../movies/movies';

const App: FC = () => {

    return (
        <div className="main_container">
            <div>
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        <Admin></Admin>
                    </Tab>
                    <Tab eventKey="movies" title="Movies">
                        <Movies></Movies>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default App;