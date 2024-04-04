import React from 'react';

const EventHandler = ({ onHandleChangeData, onHandleDeleteData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onHandleChangeData(name, value);
  };

  const handleDelete = () => {
    onHandleDeleteData();
  };

  return (
    <div className="event-handler">
      <input
        type="text"
        name="nama"
        placeholder="Masukkan nama"
        onChange={handleInputChange}
        className="input"
      />
      <input
        type="text"
        name="nim"
        placeholder="Masukkan NIM"
        onChange={handleInputChange}
        className="input"
      />
      <button className="btn" onClick={handleDelete}>Hapus Data</button>
    </div>
  );
};

export default EventHandler;
