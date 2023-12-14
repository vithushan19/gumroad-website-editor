import { Link } from "react-router-dom";

export default function Websites(props) {
  return (
    <div>
      <h1>These websites are from the API</h1>
      {props.websites?.map((website) => (
        <div key={website.id}>
          <Link to={`/website/${website.id}`}>
            <h2>{website.id}</h2>
            <p>{website.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
