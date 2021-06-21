import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h4>
        <Link to="/">Home</Link>
      </h4>
      <h4>
        <Link to="/transactions">Transactions</Link>
      </h4>
      <h4>
        <Link to="transactions/new">New Transaction</Link>
      </h4>
    </div>
  );
}
