import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ISelect {
  value: string;
  options?: { name: string; value: string }[];
  onChange?: (value: string) => void;
}

function Select({ value, options = [], onChange = () => {} }: ISelect) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="relative max-w-[300px]">
      <div className="flex items-center justify-between">
        <p>{value}</p>
        <span
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {isExpanded && (
        <ul>
          {options.map((option, index: number) => (
            <li
              key={index}
              onClick={() => {
                onChange(option.value);
              }}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
