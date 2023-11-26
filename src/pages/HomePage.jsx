import { HowCanWeHelp } from "../sections/HowCanWeHelp";
import { Fetch } from "../sections/Fetch";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { Services } from "../sections/Services";
import { Hero } from "../sections/Hero";
import { BusinessGrowth } from "../sections/BusinessGrowth";


export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services sortBy="titleAZ" limit={1}/>
                <BusinessGrowth/>
                <HowCanWeHelp />
                <Fetch />
            </main>
            <Footer />
        </>
    );
}