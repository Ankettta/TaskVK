import React, { useState } from 'react';
import Form from './Form';

export default function App() {
  const [formIndex, setFormIndex] = useState(0);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [comment, setComment] = useState('');
  const [selectedData, setSelectedData] = useState({});

  const handleSelect1 = (option) => {
    setSelectedOption1(option);
    setFormIndex(1);
  };

  const handleClear1 = () => {
    setSelectedOption1('');
  };

  const handleSelect2 = (option) => {
    setSelectedOption2(option);
    setFormIndex(2);
  };

  const handleClear2 = () => {
    setSelectedOption2('');
  };

  const handleSelect3 = (option) => {
    setSelectedOption3(option);
    setFormIndex(3);
  };

  const handleClear3 = () => {
    setSelectedOption3('');
    setSelectedDate(new Date());
    setSelectedTime('');
    setComment('');
    setFormIndex(0);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSelect = () => {
    const selectedDateTime = new Date(selectedDate);
    const [hours, minutes] = selectedTime.split(':');
    selectedDateTime.setHours(hours, minutes);
    const data = {
      option1: selectedOption1,
      option2: selectedOption2,
      option3: selectedOption3,
      dateTime: selectedDateTime,
      comment: comment,
    };
    setSelectedData(data);
    handleClear3();
  };

  const handleClear = () => {
    setSelectedOption1('');
    setSelectedOption2('');
    setSelectedOption3('');
    setSelectedDate(new Date());
    setSelectedTime('');
    setComment('');
    setSelectedData({});
  };
  const handleStartOver = () => {
    setSelectedOption1('');
    setSelectedOption2('');
    setSelectedOption3('');
    setSelectedDate(new Date());
    setSelectedTime('');
    setComment('');
    setSelectedData({});
    setFormIndex(0);
  };

  const options1 = ['Башня А', 'Башня В'];
  const options2 = ['Этаж 3', 'Этаж 4', 'Этаж 5',
   'Этаж 6', 'Этаж 7',
   'Этаж 8', 'Этаж 9', 'Этаж 10', 
   'Этаж 11', 'Этаж 12', 'Этаж 13', 
   'Этаж 14', 'Этаж 15', 'Этаж 16',
    'Этаж 17', 'Этаж 18', 'Этаж 19',
     'Этаж 20','Этаж 21', 'Этаж 22', 'Этаж 23', 
     'Этаж 24', 'Этаж 25', 'Этаж 26',
      'Этаж 27'];
  const options3 = ['Переговорная 1', 'Переговорная 2', 
  'Переговорная 3','Переговорная 4', 'Переговорная 5', 
  'Переговорная 6', 'Переговорная 7',
  'Переговорная 8', 'Переговорная 9', 'Переговорная 10' ];

  return (
    <div>
      {formIndex === 0 && (
        <Form options={options1} onSelect={handleSelect1} onClear={handleClear1} />
      )}
      {formIndex === 1 && (
        <Form options={options2} onSelect={(option) => {
          setSelectedOption2('');
          setSelectedOption1(option);
          setFormIndex(2);
        }} onClear={handleClear2} />
      )}
      {formIndex === 2 && (
        <Form options={options3} onSelect={(option) => {
          setSelectedOption3('');
          setSelectedOption2(option);
          setFormIndex(3);
        }} onClear={handleClear3} />
      )}
      {formIndex === 3 && (
        <div>
          <h2>Вы забронировали:</h2>
          <p>Башня: {selectedOption1}</p>
          <p>Этаж: {selectedOption2}</p>
          <p>Переговорная: {selectedOption3}</p>
          <p>Date and Time: {selectedData.dateTime?.toLocaleString()}</p>
          <p>Comment: {selectedData.comment}</p>
          <br />
          <label>Выберите дату:</label>
          <input type="date" value={selectedDate.toISOString().substr(0, 10)} onChange={(event) => setSelectedDate(new Date(event.target.value))} />
          <br />
          <label>Выберите время:</label>
          <input type="time" value={selectedTime} onChange={handleTimeChange} />
          <br />
          <label>Оставьте комментарий:</label>
          <input type="text" value={comment} onChange={handleCommentChange} />
          <br />
          <button onClick={handleSelect}>Выбрать</button>
          <button onClick={handleClear}>Очистить</button>
         
          
          <button onClick={handleStartOver}>Начать заново</button>
        </div>
      )}
    </div>
  );
}