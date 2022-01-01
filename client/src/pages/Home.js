import { useContext } from "react";
import { Header } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const auth = useContext(AuthContext);
 
  return (
    <div>
      <Header>Home!</Header>
      <p>Authenticated? {JSON.stringify(auth)}</p>
    </div>
  );
};

export default Home;
