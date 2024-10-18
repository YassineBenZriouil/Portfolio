import React from "react";
import "../style/conatct.css";
import Animations from "../static/animations";

function Contact() {
    return (
        <Animations>
            <div className="main_contact">
                <h1>Contact Me</h1>
                <h3>
                    <i class="fa-solid fa-phone"></i> Phone number : +212 7 67
                    58 95 73
                </h3>
                <h3>
                    <a href="mailto:yassinebuisness7@gmail.com">
                        <i class="fa-solid fa-envelope"></i> Gmail :
                        Yassinebuisness7@gmail.com
                    </a>
                </h3>
                <h3>
                    {" "}
                    <i class="fa-brands fa-linkedin"></i> Linked In :
                    @Yassinebenzriouil
                </h3>
                <h3>
                    {" "}
                    <a href="https://github.com/YassineBenZriouil">
                        {" "}
                        <i class="fa-brands fa-square-github"></i> Gethub :
                        @Yassinebenzriouil{" "}
                    </a>
                </h3>
            </div>
        </Animations>
    );
}

export default Contact;
