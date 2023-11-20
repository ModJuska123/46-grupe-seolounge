import { Services } from "../components/Services";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


function DemoPage() {
  return (
   <div>
    <Header/>
        <main>
            <Services/>
            <Services/>

        </main>
    <Footer/>
   </div>
  );
}

export default DemoPage;