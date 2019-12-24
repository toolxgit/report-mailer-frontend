import React, {useCallback, useState} from 'react';
import {Select} from '@shopify/polaris';

export default function SelectExample(props) {
  const [selected, setSelected] = useState('today');

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    {label: 'Today', value: 'today'},
    {label: 'Yesterday', value: 'yesterday'},
    {label: 'Last 7 days', value: 'lastWeek'},
  ];
console.log("selected", selected);
  return (
    <Select
      label={props.label}
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
  );
}
