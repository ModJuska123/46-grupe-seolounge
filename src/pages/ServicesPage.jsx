import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { Services } from "../sections/Services";

export function DemoPage() {
    return (
        <>
            <Header />
            <main>
                <Services />
                <Services />
            </main>
            <Footer />
        </>
    );
}