interface CheckboxProps {
  label?: string | React.ReactNode;
  checked?: boolean;
}

function Checkbox({ label = "", checked = false }: CheckboxProps) {
  return (
    <div className="flex items-center gap-x-2">
      <span className="w-4 h-4 rounded-[4px] border border-primary-border"></span>
      {label && <label className="text-sm">{label}</label>}
    </div>
  );
}

export default Checkbox;
