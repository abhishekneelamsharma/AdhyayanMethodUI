import { useEffect, useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


function Contact() {
    const [contactData, setContactData] = useState({});
    let name, value;
    const handleFormData = (e) => {
        name = e.target.name;
        value = e.target.value;

        setContactData({ ...contactData, [name]: value });
    }

    const submitMessage = async (e) => {
        try {
            e.preventDefault();
            const { name, email, message } = contactData;
            const res = await fetch("am-api-production.up.railway.app/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, message
                })
            })
            const data = await res.json();
            // console.log(data);
            if (!data) {
                alert("message not sent");
            } else {
                alert("message sent");
                setContactData({ ...contactData, message: "" });
            }
        } catch (err) {
            console.log(err);
        }
    }

    const navigate = useNavigate();
    

    useEffect(() => {
        const callContactPage = async () => {
            try {
                const res = await fetch("am-api-production.up.railway.app/contact", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                })
                const data = await res.json();
                console.log(data);
    
                if (res.status !== 200) {
                    throw new Error(res.error);
                }
            } catch (err) {
                console.log(err);
                navigate("/login");
            }
        }
        callContactPage();
    }, []);

    return (
        <>
            <section className="contact-section py-5">
                <div className="container">
                    <h2 className='text-center'>Contact</h2>
                    <hr className='w-25 mx-auto' />
                    <div className="row">
                        <div className="col-12 col-md-6 order-1 order-md-0 text-center text-md-start">
                            <form method=" ">
                                <div class="mb-1 contact-form-input">
                                    <label for="name" class="form-label"></label>
                                    <input type="text" class="form-control" id="name" name="name" autoComplete="off" value={contactData.name} onChange={handleFormData}
                                        placeholder='enter your name' />
                                </div>
                                <div class="mb-1 contact-form-input">
                                    <label for="email" class="form-label"></label>
                                    <input type="email" class="form-control" id="email" name="email" autoComplete="off" value={contactData.email} onChange={handleFormData}
                                        placeholder='enter your email' />
                                </div>
                                <div class="mb-1 contact-form-input">
                                    <label for="message" class="form-label"></label>
                                    <textarea id="query" cols="30" rows="5" name="message" className='form-control'
                                        value={contactData.message} onChange={handleFormData} autoComplete="off"
                                        placeholder='enter your query'></textarea>
                                </div>
                                <button type="submit" class="btn btn-success mt-4 px-4" onClick={submitMessage}>Submit</button>
                            </form>
                        </div>

                        <div className="col-12 col-md-6 contact-details order-0 order-md-1 ">
                            <ul className='details'>
                                <li><i class="fa-solid fa-location-dot"></i>Quadri Street,
                                    Moulvi toal (bdn)</li>
                                <li><i class="fa-solid fa-envelope"></i>adhyayanmethod@gmail.com</li>
                                <li><i class="fa-solid fa-phone"></i>9759559707 / 8630035285</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact;