import React from 'react';
function categorySelected(name) {
    console.log(`${name} clicked`)
}

function Nav() {
    const categories = [
        {
            name: "project-1",
            description: "This was my first attempt at a portfolio with very basic knowledge of program language. "},
        {    name: "project-2", 
             description:"This project was called Run Buddy. It was my first coding project and I'll always be proud."},
        {    name: "project-3",
             description:"This project is called battle bots. It is a work in progress. I want to add some features to it. It showed at the time my new .js skills"},
        {    name: "project-4",
             description:"This is a very special project to me. This is Reagans page. It will never be complete because I let her help me with it as she feels up to it. She is now 7 and loves coding!"},
        ];
    return(
        <header>
            <h2>
                "They Call Me Topher"
            </h2>
            <nav>
                <ul className = "flex-row">
                  <li className = "mx-2">
                      <a href="about">
                          About me
                      </a>
                  </li>
                  <li className = "mx-2">
                      <a href="Contact">
                      <span>Contact</span>
                      </a>
                   </li>
                   <li className = "mx-2">
                      <a href="Resume">
                      <span>Resume</span>
                      </a>
                   </li>
                   <li className = "mx-2">
                      <a href="Portfolio">
                      <span>Portfolio</span>
                      </a>
                   </li>
                </ul>  
             
                  
                  {categories.map((category) => (
                      <li
                        className="mx-1"
                        key={category.name}
                        >
                            <span onClick={categorySelected}>
                                {category.name}
                            </span>
                        </li>
                  ))}
                
                
            </nav>

        </header>
    );
}
export default Nav;