import {FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa';
import dog from './dog.svg';


export function Footer() {
    return (
        <div className="container">
            <footer className="py-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Features</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Features</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Features</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>© 2023 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis" href="/"><FaTwitter/><svg className="bi" width="24" height="24"></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="/"><FaInstagram/><svg className="bi" width="24" height="24"></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="/"><FaFacebook/><svg className="bi" width="24" height="24"></svg></a></li>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 5h2"></path><path d="M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8"></path><path d="M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2z"></path><path d="M12 18v2"></path><path d="M10 11v.01"></path><path d="M14 11v.01"></path><path d="M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815z"></path><path d="M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815z"></path></svg>
                        <img src={dog}/>
                    </ul>
                </div>
            </footer>
        </div>
    );
}