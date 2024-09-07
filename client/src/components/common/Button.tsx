function Button({
  text = "Button",
  color = "#FFFFFF",
  bg = "#009048",
  disabled = false,
  className = "",
}) {
  return (
    <button
      className={`px-3 py-2 rounded-md text-[22px] min-w-[180px]  ${className}`}
      style={{
        color: color,
        backgroundColor: bg,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        border: `1px solid ${color}`,
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
