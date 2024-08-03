import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function ServiceTickets() {
  const location = useLocation();
  const { id } = useParams();

  return (
    <>
      <h2>Service Tickets</h2>
      {
        location.pathname === `/tickets/${id}/assign` ? '' : <Link to="/tickets/create">Add</Link>
      }
      <Outlet />
    </>
  );
}
