import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Container, Main } from "./index.styles";

function Layout() {
    return (
        <Container>
        <Header />
        <Main>
        <Outlet />
        </Main>
        <Footer />
        </Container>
    );
}

export default Layout;