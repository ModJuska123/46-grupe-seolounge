import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { Services } from "../sections/Services";

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Services sortBy="titleAZ" limit={1}/>
            </main>
            <Footer />
        </>
    );
}