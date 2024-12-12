import "./styles/app.scss";
import HomePage from "./pages/homepage";
import Activities from "./pages/activities";
import 'bootstrap/dist/css/bootstrap.min.css'
import Gallery from "./pages/gallery";
import { Schedule } from "./pages/schedule";
import { Location } from "./pages/location";

function App() {
  return (
    <>
      <HomePage />
      <Activities />
      <Gallery />
      <Schedule />
      <Location />
    </>
  );
}

export default App;
