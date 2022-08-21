import SignUp from "./Components/SignUp";
import WelcomeText from "./Components/WelcomeText";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <WelcomeText text="Looks like you're new here!" />
      <SignUp />
    </Layout>
  );
}

export default App;
