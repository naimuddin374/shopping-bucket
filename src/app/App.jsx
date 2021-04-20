import { Helmet } from "react-helmet";


// STYLES
import '../assets/styles/reset.css'
import '../assets/styles/style.css'


// CUSTOM COMPONENTS
import Navigation from "../components/navigation";
import BucketPage from "../pages/buckets";
import AppRouter from "./router";



function App() {
  return (
    <div className="">
      <Helmet>
        <title>Shopping List</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Navigation />
      <AppRouter />
    </div>
  );
}
export default App;
