import { Link } from "react-router";

export default function ActivityList({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}

// Activity in ActivityList link to own page
function ActivityListItem({ activity }) {
  return (
    <li>
      <Link to={"/activities/" + activity.id}>{activity.id}</Link>
    </li>
  );
}
