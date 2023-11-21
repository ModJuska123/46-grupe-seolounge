import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import ufo from "../assets/ufo.png";


export function NoPage() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row" >
                    <div className="col-12 col-sm-6 col-md-4 offset-lg-2 col-xl-3 offset-xl-3">
                        <h1>404</h1>
                        <h2>Page not found...</h2>
                    </div>
                    <div className="col-12 col-sm-6 col-md-8 col-lg-4 col-xl-3">
                        <img src={ufo} alt="ufo" />
                    </div>
                </div>
            </div>
            <Footer />
                    {/* <div className="col-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque saepe id corrupti asperiores eos dolores illum distinctio dolor dolore, consequatur qui commodi repudiandae culpa iure voluptate ipsa! Eius earum ullam temporibus facilis eum nostrum dolorem doloremque enim consectetur doloribus animi quas voluptatem blanditiis repudiandae excepturi aperiam quo, ad beatae.</div> */}
        </>
    );
}