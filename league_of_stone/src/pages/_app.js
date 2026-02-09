import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import "./Game.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'  // Importation de Bootstrap si besoin

export default function App({ Component, pageProps }) {
  return (
    <Provider store = {store}>
      <Component {...pageProps} />
    </Provider>
  )
}
