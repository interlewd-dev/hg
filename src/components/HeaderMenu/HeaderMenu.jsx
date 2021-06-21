import React, { createRef } from 'react';
import MenuWidget from '../MenuWidget';
import './HeaderMenu.module.css';

const HeaderMenu = () => {
  const loadGameRef = createRef();
  const importRef = createRef();
  const exportRef = createRef();

  return <>
    <input id='loadGame' ref={loadGameRef} type='file' accept='.zip'/>
    <input id='import' ref={importRef} type='file' accept='.json' />
    <input id='export' ref={exportRef} type='file' accept='.json' />

    <MenuWidget title='File'>
      <button
        onClick={() => loadGameRef.current.click()}
      >
        Load Game...
      </button>
      <hr />
      <button>Save</button>
      <button>Load</button>
      <hr />
      <button
        onClick={() => importRef.current.click()}
      >
        Import...
      </button>
      <button
        onClick={() => exportRef.current.click()}
      >
        Export...
      </button>
    </MenuWidget>
    <MenuWidget title='Cheats'>
      <button>Apply State...</button>
    </MenuWidget>
  </>;
}

export default HeaderMenu;
