import { useNavigate } from "react-router-dom";
export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page not found 😢</h1>
      <button
        type="back"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1); // for navigating back
        }}
      >
        &larr; Back
      </button>
    </div>
  );
}
