import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import Table from "./components/pages/Table/Table";
import Home from "./components/pages/Home/Home";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchTables} from "./redux/tablesReducer";

function App() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchTables()), [dispatch]);

    return (
      <main>
          <Container>
              <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/table/:id" element={<Table />} />
                  <Route path="*" element={<ErrorPage />} />
              </Routes>
              <Footer />
          </Container>
      </main>
  );
}

export default App;
