import "./styles/app.scss";
import HomePage from "./pages/homepage";
import Activities from "./pages/activities";
import 'bootstrap/dist/css/bootstrap.min.css'
import Gallery from "./pages/gallery";
import { Schedule } from "./pages/schedule";
import { Location } from "./pages/location";
import { Footer } from "./pages/footer";
import { AboutOne, AboutTwo } from "./pages/about";
import { Document, DocumentHeading } from "./pages/document";
// import { PrivateLessons } from "./components/privateLessons";

function App() {
  return (
    <>
      <HomePage />
      <AboutOne />
      <AboutTwo />
      <DocumentHeading />
      <Document />
      {/* <Activities /> */}
      {/* <Gallery /> */}
      {/* <Schedule /> */}
      {/* <PrivateLessons /> */}
      {/* <Location />
      <Footer /> */}
    </>
  );
}

export default App;
