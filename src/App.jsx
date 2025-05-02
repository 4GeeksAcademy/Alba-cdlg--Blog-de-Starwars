import Layout from "./components/Layout";
import { GlobalProvider } from "./context/GlobalContext";
import AppRoutes from "./routes";


const App = () => {
  return (
    <GlobalProvider>
    <Layout>
      <AppRoutes />
    </Layout>
  </GlobalProvider>
);
};

export default App;
