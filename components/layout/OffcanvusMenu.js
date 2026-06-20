import Link from "next/link"

export default function OffcanvusMenu({ isOffcanvus, handleOffcanvus }) {
    return (
        <>
            <div className={`offCanvas__info ${isOffcanvus ? "active" : ""}`}>
                    <div className="offCanvas__close-icon menu-close" onClick={handleOffcanvus}>
                        <button><i className="far fa-window-close" /></button>
                    </div>
                    <div className="offCanvas__logo mb-30">
                        <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                    </div>
                    <div className="offCanvas__side-info mb-30">
                        <div className="contact-list mb-30">
                            <h4>Offices</h4>
                            <p>Boston, MA <br /> Las Vegas, NV</p>
                        </div>
                        <div className="contact-list mb-30">
                            <h4>Phone Number</h4>
                            <p><a href="tel:+17025146055">(702) 514-6055</a></p>
                        </div>
                        <div className="contact-list mb-30">
                            <h4>Email Address</h4>
                            <p><a href="mailto:Info@MottaFinancial.com">Info@MottaFinancial.com</a></p>
                        </div>
                    </div>
                    <div className="offCanvas__social-icon mt-30">
                        <Link href="https://www.linkedin.com/company/motta-financial/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></Link>
                    </div>
                </div>
                <div className={`offCanvas__overly ${isOffcanvus ? "active" : ""}`} onClick={handleOffcanvus} />
        </>
    )
}
