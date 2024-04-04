import React, { useState } from 'react';
import './styles.css';
import EventHandler from './event';

const ChildComponent = (props) => {
  return (
    <div className="child-container">
      <p>Data yang diterima dari induk:</p>
      <p>Nama: {props.nama}</p>
      <p>NIM: {props.nim}</p>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState({ nama: '', nim: '' });

  const handleChangeData = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handleDeleteData = () => {
    setData({ nama: '', nim: '' });
  };

  return (
    <div className="parent-container">
      <h2 className="title">Data Mahasiswa</h2>
      <ChildComponent nama={data.nama} nim={data.nim} />
      <EventHandler
        onHandleChangeData={handleChangeData}
        onHandleDeleteData={handleDeleteData}
      />

    </div>
  );
};

export default App;
