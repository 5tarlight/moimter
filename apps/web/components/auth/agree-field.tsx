type AgreementItemProps = {
  label: React.ReactNode;
  required?: boolean;
  checked: boolean;
  onChange: () => void;
  error?: boolean;
};

export default function AgreementItem({
  label,
  required = false,
  checked,
  onChange,
  error = false,
}: AgreementItemProps) {
  return (
    <label className="flex items-center gap-2 text-sm w-full">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 border-gray-300 rounded outline-none accent-black"
      />
      <div className={error ? "text-red-500" : "text-gray-700"}>
        {label}
        {required && <span className="ml-1">*</span>}
      </div>
    </label>
  );
}
