import './Sidebar.css'
import logo from '../../assets/logo.png';
import {SidebarData} from "../../data/data.ts";
import { UilSignOutAlt } from '@iconscout/react-unicons';
import {useState} from "react";

const Sidebar = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className="Sidebar">
            <div className="logo">
                <img src={logo} alt=""/>
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index ? 'menuItem active' : 'menuItem'}
                             key={index}
                            onClick={() => setSelected(index)}>
                            <item.icon size={20}/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    );
                })}
                <div className="menuItem">
                    <UilSignOutAlt/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar