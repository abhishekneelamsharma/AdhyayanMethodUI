import mainImage from '../images/mainImg.png';
import Footer from './Footer';


function Home() {
    return (
        <>
            {/* ==================
                 HERO-SECTION 
            ================== */}
            <section className="hero-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6  my-auto order-md-0 order-1 text-center text-md-start">
                            <h1 className='mb-0'>ADHYAYAN METHOD</h1>
                            <h5>COACHING INSTITUTE</h5>
                            <p>Hello...We are Adhyayan Method Coaching we believe in nurturing talent, fostering creativity, and empowering students to achieve their aspirations. With a team of dedicated and experienced educators, state-of-the-art facilities, and a comprehensive curriculum, Our personalized approach to learning ensures that each student receives individual attention, mentorship, and resources tailored to their unique needs. Join us on the journey to unlocking your full potential and conquering challenges with confidence.</p>
                            <button className='btn btn-success px-4' data-bs-toggle="tooltip"
                                data-bs-placement="right" title="Please Contact">Join us</button>
                        </div>
                        <div className="col-12 col-md-6  my-auto text-center text-lg-end order-md-1 order-0">
                            <img src={mainImage} alt="error hero-section-img :)" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================
                 ABOUT-SECTION 
                ================== */}
            <section className="about-section bg-color text-center py-5">
                <div class="custom-shape-divider-top-1702661490">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>

                <div className="container">
                    <h2 className='mb-0 mt-5'>About</h2>
                    <hr className='w-25 mx-auto mt-1' />
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus consectetur corporis voluptas illum veniam? Totam illum, ipsa quis obcaecati consequatur velit, dignissimos atque delectus tenetur repellendus vel iure neque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus consectetur corporis voluptas illum veniam? Totam illum, ipsa quis obcaecati consequatur velit, dignissimos atque delectus tenetur repellendus vel iure neque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus consectetur corporis voluptas illum veniam? Totam illum, ipsa quis obcaecati consequatur velit, dignissimos atque delectus tenetur repellendus vel iure neque.</p>
                    </div>
                </div>

            </section>


            {/* ==================
                 COACHINGS-SECTION 
            =================== */}
            <section className="coachings-section text-center bg-color">
                <div className="container">
                    <h2>Coachings</h2>
                    <hr className='w-25 mx-auto' />
                    <div className="row g-3 g-md-5 my-auto">
                        <div className="col-12 col-md-4">
                            <div className="content">
                                STET
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="content">
                                CTET
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="content">
                                UPTET
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="content">
                                KVS
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="content">
                                REET
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="content">
                                DSSSB
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="content">
                                UPSSSE
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="content">
                                LEKHPAL
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="content">
                                UP POLICE
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="content">
                                UPPET
                            </div>
                        </div>
                    </div>
                </div>

                <div class="custom-shape-divider-bottom-1702882568 ">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>

            </section>

            {/* ==================
                 CONTECT-SECTION 
            =================== */}
            <section className="contact-section py-5">
                <div className="container">
                    <h2 className='text-center'>Contact</h2>
                    <hr className='w-25 mx-auto' />
                    <div className="row">
                        <div className="col-12 col-md-6 order-1 order-md-0 text-center text-md-start">
                            <form >
                                <div class="mb-1 contact-form-input">
                                    <label for="name" class="form-label"></label>
                                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder='enter your name' />
                                </div>
                                <div class="mb-1 contact-form-input">
                                    <label for="email" class="form-label"></label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder='enter your email' />
                                </div>
                                <div class="mb-1 contact-form-input">
                                    <label for="email" class="form-label"></label>
                                    <textarea name="query" id="query" cols="30" rows="5" className='form-control' placeholder='enter your query'></textarea>
                                </div>
                                <button type="submit" class="btn btn-success mt-4 px-4 ">Submit</button>
                            </form>
                        </div>

                        <div className="col-12 col-md-6 contact-details order-0 order-md-1 ">
                            <ul className='details'>
                                <li><i class="fa-solid fa-location-dot"></i>Quadri Street,
                                    Moulvi toal (bdn)</li>
                                <li><i class="fa-solid fa-envelope"></i>AdhyayanMethod@gmail.com</li>
                                <li><i class="fa-solid fa-phone"></i>9759559707 / 8630035285</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            {/* ==================
                FOOTER-SECTION 
            =================== */}
            <Footer />

        </>
    )
}

export default Home;