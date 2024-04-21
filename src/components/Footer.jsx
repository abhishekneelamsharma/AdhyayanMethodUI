
function Footer(){
    return(
        <>
         <footer className="footer-section bg-color ">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-6 col-md-3 footer-section-content ">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam possimus nam obcaecati. Laudantium autem, deserunt asper</p>
                        </div>
                        <div className="col-6 col-md-3 footer-section-content ">
                            <ul>
                                <li><p><i class="fa-solid fa-arrow-right mx-1"></i>Home</p></li>
                                <li><p><i class="fa-solid fa-arrow-right mx-1"></i>About</p></li>
                                <li><p><i class="fa-solid fa-arrow-right mx-1"></i>Coachings</p></li>
                                <li><p><i class="fa-solid fa-arrow-right mx-1"></i>Contact</p></li>
                            </ul>
                        </div>
                        <div className="col-3 footer-section-content dn">
                            <ul>
                                <li><p><i class="fa-solid fa-arrow-right mx-1"></i>Home</p></li>
                                <li><p><i class="fa-solid fa-arrow-right mx-1"></i>About</p></li>
                                <li><p><i class="fa-solid fa-arrow-right mx-1"></i>Coachings</p></li>
                                <li><p><i class="fa-solid fa-arrow-right mx-1"></i>Contact</p></li>
                            </ul>
                        </div>
                        <div className="col-3 footer-section-content dn">
                            <ul>
                                <li><p><i class="fa-solid fa-location-dot mx-1"></i>Quadri Street,Moulvi toal(bdn)</p></li>
                                <li><p><i class="fa-solid fa-envelope mx-1"></i>AdhyayanMethogmail.com</p></li>
                                <li><p><i class="fa-solid fa-phone mx-1"></i>9759559707 / 8630035285</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="social-profile mb-2">
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                    </div>
                </div>
                {/* <marquee><p>Copyright<i class="fa-regular fa-copyright"></i>2023AdhyayanMethod || This website is made by ABHISHEK SHARMA</p></marquee> */}
            </footer>
        </>
    )
}

export default Footer;