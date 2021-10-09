import { Container } from "@mui/material";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import News from "./pages/News/News";
import NewsDetail from "./pages/NewsDetail/NewsDetail";

function App() {
    return (
        <div className="app" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Navbar />
            <Container fixed style={{paddingBottom: '64px'}}>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/news" component={News} />
                    <Route path="/news/:id" component={NewsDetail} />
                    <Route path="*" component={() => <Redirect to="/" />} />
                </Switch>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
