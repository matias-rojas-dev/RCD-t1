interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shadowColor?: string;
  backgroundColor?: string;
}

function Button({
  children,
  disabled,
  shadowColor,
  backgroundColor,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <div className="group relative inline-block">
      <div
        className={`absolute -inset-[1px] top-1 rounded-lg
          ${shadowColor} opacity-70 blur
          transition duration-500 ${
            disabled ? "saturate-0" : "group-hover:opacity-100 group-hover:duration-200"
          }`}
      />
      <button
        className={`relative h-10 w-24 rounded-lg ${backgroundColor}
        font-semibold text-white
        transition-all duration-200 disabled:bg-gray-400/60`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
