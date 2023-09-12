import React from 'react';

const CheckboxButton = ({ value, name, onChange, checked }: { value: string; name: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; checked: boolean }) => {
  return (
    <div className='flex'>
      <input type='checkbox' id={`choose-${name}`} className={`peer hidden`} value={value} onChange={onChange} checked={checked} />
      <label
        htmlFor={`choose-${name}`}
        className={`select-none cursor-pointer rounded-[50px] border-2 border-gray-200 bg-gray-200
 py-3 px-6 font-bold text-text-color transition-colors duration-200 ease-in-out peer-checked:bg-secondary-100 peer-checked:text-secondary-700 peer-checked:border-gray-200  hover:text-secondary-700 hover:bg-secondary-100 flex gap-2`}
      >
        {name}
      </label>
    </div>
  );
};

export default CheckboxButton;
