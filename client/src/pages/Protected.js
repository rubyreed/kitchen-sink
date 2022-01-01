import { useContext } from "react";
import { Header } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
const Protected = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <Header>Protected</Header>
      <p>Email: {auth.email}</p>
      <p> {JSON.stringify(auth)}</p>
      {auth.authenticated && <p>You are logged in!</p>}
      {!auth.authenticated && <p>ERROR SHOULD NOT BE HERE</p>}
    </div>
  );
};
export default Protected;
