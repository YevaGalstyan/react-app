import React, {FC, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './style.css'
import Movies from '../movies';
import Admin from '../admin';

const App: FC = () => {

    const [activeTab, setActiveTab] = useState('home'); // Default tab is 'home'

    const handleTabChange = (tabKey) => {
        setActiveTab(tabKey);
    };


    return (
        <div className="main_container">
            <div>
                <Tabs
                    activeKey={activeTab}
                    onSelect={handleTabChange}
                    id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        <Admin changeTab={handleTabChange} />
                    </Tab>
                    <Tab eventKey="movies" title="Movies">
                        <Movies changeTab={handleTabChange} />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default App;