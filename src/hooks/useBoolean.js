import { useCallback, useState } from "react";

const useBoolean = (initValue = false) => {
  const [open, setOpen] = useState(initValue);

  const setTrue = useCallback(() => setOpen(true), [setOpen]);
  const setFalse = useCallback(() => setOpen(false), [setOpen]);
  const setToggle = useCallback(() => setOpen((prev) => !prev), [setOpen]);

  return {
    open,
    setTrue,
    setFalse,
    setToggle,
  };
};

export default useBoolean;
