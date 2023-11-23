import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { Services } from "../sections/Services";

export function ServicesPage() {
    return (
        <>
            <Header />
            <main>
                <Services sortBy="titleAZ" limit={2}/>
            </main>
            <Footer />
        </>
    );
}