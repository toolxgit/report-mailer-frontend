import React, { useCallback, useState } from 'react';
import { Select } from '@shopify/polaris';

export default function SelectShopify(props) {
  const [selected, setSelected] = useState('today');

  const handleSelectChange = useCallback((value, key) => {
    console.log('key_name+++++++++', key)
    setSelected(value);
    props.callBack(value, key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('selected+++++++', selected)


  return (
    <Select
      label={props.label}
      options={props.options}
      onChange={(e) => handleSelectChange(e, props.key_name)}
      value={selected}

    />
  );
}
