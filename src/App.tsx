import "./styles/app.scss";
import HomePage from "./pages/homepage";
import Activities from "./pages/activities";
import 'bootstrap/dist/css/bootstrap.min.css'
import Gallery from "./pages/gallery";
import { Schedule } from "./pages/schedule";
import { Location } from "./pages/location";
import { Footer } from "./pages/footer";

function App() {
  return (
    <>
      <HomePage />
      <Activities />
      <Gallery />
      <Schedule />
      <Location />
      <Footer />
    </>
  );
}

export default App;
