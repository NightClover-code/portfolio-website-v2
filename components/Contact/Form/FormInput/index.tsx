interface FormInputProps {
  width?: number;
  height?: number;
  name?: string;
  label?: string;
  type?: 'textarea' | 'text';
  subLabel?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  width,
  label,
  name,
  subLabel,
  height,
  type = 'text',
}) => {
  return (
    <div className="flex flex-col items-start relative font-bold mb-8">
      {label && (
        <div className="relative">
          <label>{label}</label>
          <div className="absolute top-0 right-[-12px]">*</div>
        </div>
      )}
      {type === 'text' ? (
        <input
          required
          name={name}
          type="text"
          style={{ width, height: height || 48 }}
          className="mt-1 border-2 w-full rounded-[4px] border-[#E4E4E4] outline-none px-3 text-[17px]"
        />
      ) : (
        <textarea
          required
          name={name}
          style={{ width, height: height || 48 }}
          className="pt-2 mt-1 border-2 w-full rounded-[4px] border-[#E4E4E4] outline-none px-3 text-[17px]"
        />
      )}

      {subLabel && <h5 className="font-bold text-[12px] mt-2">{subLabel}</h5>}
    </div>
  );
};

export default FormInput;
