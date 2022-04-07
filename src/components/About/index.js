import React from 'react';
import coverImage from "../../assets/cover/Chris, Reagy, Bubby.jpg";
function About() {
    return(

        <section className="my-5">
            <h1 id = "about"> Who is Chirs D?</h1>
            <img src={coverImage} className="my-2" style={{width: "10"}} alt = "cover"/>
        </section>
        
    );
}
export default About;