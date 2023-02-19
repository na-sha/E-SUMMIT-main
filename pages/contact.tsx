import styles from '../styles/Contact.module.css'
import Footer from '../components/Footer/Footer_main'
import Navbar from '../components/Navbar/Navbar_main'
import Image from 'next/image';


const Contact = () => {

  const handleClick = () => {
    alert("Form Submitted !");
  };
  return (
    <>
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>
      <main className="grid-container">
        <div className="flow">
          <h1 className="fs-700 uppercase ff-serif">Get in touch</h1>
          <p>
            Have a question? - drop us a message. Feel free to ask us for
            guidance in entrepeneurship or a question or anything in general you
            feel should be conveyed. We are always happy to help.
          </p>
          <p>
            You can also contact us on our socials or <br />
            <b className="text-gradient">Email: edc@thapar.edu</b> <br />
            <b className="text-gradient">Arpit Taneja: +91 9818084700</b> <br />
            <b className="text-gradient">Arushi Garg: +91 6283108001</b>
          </p>
          <div className="absolute z-[0] w-[10%] h-[15%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[20%] h-[30%] rounded-full bottom-40 white__gradient" />
          <div className="absolute z-[0] w-[30%] h-[20%] right-20 bottom-20 blue__gradient" />
        </div>
        <div>
          <form
            target="_blank"
            className="my-form"
            action="https://formsubmit.co/edc@thapar.edu"
            method="POST"
          >
            <div className="grid-container--form ">
              <ul>
                <li>
                  <select>
                    <option selected disabled>
                      -- Please choose an option --
                    </option>
                    <option>Have a query?</option>
                    <option>Sponsor Us</option>
                    <option>Other</option>
                  </select>
                </li>
                <li>
                  <div className="grid grid-2">
                    <input
                      type="text"
                      placeholder="First name"
                      id="fname"
                      name="First name: "
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      id="lname"
                      name="Last name: "
                      required
                    />
                  </div>
                </li>
                <li>
                  <div className="grid grid-4">
                    <input
                      type="text"
                      placeholder="Email"
                      // class="contact-form-txt"
                      id="email"
                      name="Email: "
                      required
                    />
                    {/* <input type="text" placeholder="Phone" /> */}
                  </div>
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    // class="contact-form-textarea"
                    id="msg"
                    name="Message: "
                    required
                  ></textarea>
                </li>

                {/* <li>
                                    <input type="checkbox" id="terms" />
                                    <label for="terms">I have read and agreed with <a href="">the terms and
                                        conditions.</a></label>
                                </li> */}
                <input type="hidden" name="_captcha" value="false"></input>
                <input
                  type="hidden"
                  name="_next"
                  value="https://edcthapar.netlify.app/"
                ></input>
                <li>
                  <div className="grid grid-3">
                    <div className="required-msg">REQUIRED FIELDS</div>

                    <button
                      className="btn-grid"
                      onClick={handleClick}
                      type="submit"
                    >
                      <span className="back">
                        <Image
                          src="/email-icon.svg"
                          alt=""
                          width={50}
                          height={50}
                        />
                      </span>
                      <span className="front">SUBMIT</span>
                    </button>
                    <button className="btn-grid" type="reset">
                      <span className="back">
                        <Image
                          src="/eraser-icon.svg"
                          alt=""
                          width={50}
                          height={40}
                        />
                      </span>
                      <span className="front">RESET</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </main>
      <div className={`sm:px-16 px-6 flex justify-center items-start`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contact