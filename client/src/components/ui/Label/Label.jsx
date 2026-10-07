import "./Label.css";

function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-gray-600">
      {children}
    </label>
  );
}

export default Label