import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { Register } from "../sections/Register";
import { Services } from "../sections/Services";

export function RegisterPage() {
    return (
        <>
            <Header />
                <main>
                <Register />
                </main>
            <Footer />
        </>
    );
}