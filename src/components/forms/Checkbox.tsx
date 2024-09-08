import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

interface CheckboxProps {
  label?: string | React.ReactNode;
  checked?: boolean;
  onCheck?: (check: boolean) => void;
}

function Checkbox({
  label = "",
  checked = false,
  onCheck = () => {},
}: CheckboxProps) {
  const [checkState, setCheckState] = useState<boolean>(checked);

  return (
    <div
      className="flex items-center gap-x-2 cursor-pointer"
      onClick={() => {
        setCheckState(!checkState);
        onCheck(!checkState);
      }}
    >
      <span className="w-4 h-4 flex items-center justify-center rounded-[4px] border border-primary-border">
        {checkState && <BsCheckLg fontSize={20} />}
      </span>
      {label && <label className="text-sm">{label}</label>}
    </div>
  );
}

export default Checkbox;
