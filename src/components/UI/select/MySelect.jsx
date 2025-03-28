import React from 'react';

const MySelect = ({option, defaultValue, value, onChange}) => {
    return (
    
    <select 
        value={value}
        onChange={event => onChange(event.target.value)}>
      <option disabled={true} value="">{defaultValue}</option>
      {option.map(opt =>
        <option key={opt.value} value={opt.value}>{opt.name}</option>)}
    </select>
 
    );
};

export default MySelect;