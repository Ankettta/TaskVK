import React, { useState } from 'react';

export default function Form({ options, onSelect, onClear }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = () => {
    onSelect(selectedOption);
  };

  const handleClear = () => {
    setSelectedOption('');
    onClear();
  };

  return (
    <div>
      <h2>Вы можете забронировать переговорную, для этого выберите подходящие варианты из списка ниже:</h2>
      <select value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
        <option value="">Не выбрано</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
      <button onClick={handleSelect} disabled={!selectedOption}>
        Выбрать
      </button>
      <button onClick={handleClear}>Очистить</button>
    </div>
  );
}