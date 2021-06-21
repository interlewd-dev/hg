import React, { useState } from 'react';
import Media from 'react-media';
import styles from './Sidebar.module.css';

export const MediaSidebar = props => {
    const [hidden, setHidden] = useState(false);

    return <>
        <Media query=`(max-width: ${props.small})`>
            {() => setHidden(true)}
            <button onClick={() => setHidden(hidden => !hidden)}>
                Sidebar
            </button>
        </Media>
        <Sidebar className={hidden ? styles.hide : styles.flex} {...props} />
    </>;
}

const Sidebar = () => {
};

export default Sidebar;
