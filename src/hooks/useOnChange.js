import { useState } from "react";

const useOnChange = () => {
  const [value, setValue] = useState('');

  const onChange = ({ target }) => setValue(target.value)

  return {
    value,
    onChange,
  };
};

export default useOnChange;
