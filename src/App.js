import Layout from "./components/Layout/Layout";
import Cards from "./components/Cards/Cards";
import Toggle from "./components/WorkWithState/Toggle";
import MoreToggle from "./components/WorkWithState/MoreToggle";

const App = () => {
    return (
        <Layout>
            <Cards />
            <hr />
            <Toggle />
            <hr />
            <MoreToggle />
        </Layout>
    );
};  

export default App;