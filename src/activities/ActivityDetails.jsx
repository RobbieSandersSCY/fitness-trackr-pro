import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router";
// Activity in ActivityList link to own page
// move delete button to new details page
// after delete, user is redirected to actList

export default function ActivityDetails() {
  const { token } = useAuth;
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // data is fetched from API
  // use dynamic segment for actID

  const tryDelete = async () => {
    setError(null);

    try {
      await deleteActivity(token, activity.id);
      navigate("/activities");
    } catch (e) {
      setError(e.message);
    }
  };

  // Page displays name, desc, creator
  return (
    <article>
      <h1>ActivityName</h1>
      <p>ActivityDescription</p>
      <p>ActivityCreator</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </article>
  );
}
