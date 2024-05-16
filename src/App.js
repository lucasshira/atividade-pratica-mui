import AnchorTemporaryDrawer from "./components/drawer";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <AnchorTemporaryDrawer />
      <ListarTarefa />
    </div>
  );
}

export default App;
