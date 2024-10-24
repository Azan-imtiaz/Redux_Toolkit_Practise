import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleColor } from './comp/toogle';

function App() {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.toggle.val);

  const handleToggle = () => {
    dispatch(toggleColor());
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button
        onClick={handleToggle}
        style={{ padding: '10px 20px', fontSize: '20px', backgroundColor: 'black', color: 'white', borderRadius: '8px' }}
      >
        Toggle
      </button>
    </div>
  );
}

export default App;
