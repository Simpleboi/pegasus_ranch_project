import "./styles/app.scss";
import HomePage from "./pages/homepage";
import Activities from "./pages/activities";
import 'bootstrap/dist/css/bootstrap.min.css'
import Gallery from "./pages/gallery";

function App() {
  return (
    <>
      <HomePage />
      <Activities />
      <Gallery />
    </>
  );
}

export default App;
