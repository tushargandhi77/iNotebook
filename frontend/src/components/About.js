import React from 'react'

const About = () => {

  return (
    <>
            <div className='container'>
                <h1 my-3>About us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About INotebook
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>INotebook</strong> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic, architecto aliquam, harum voluptates iste omnis beatae, ea perferendis commodi tenetur expedita vel laudantium itaque aliquid quos. Pariatur eius eaque nisi ducimus dolore similique vel libero veritatis distinctio nostrum obcaecati voluptas, ratione maiores est? Perferendis labore a ipsum nisi quaerat! Neque doloremque reprehenderit dolorem, amet corrupti libero? Officia, eius pariatur!</p>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What It Do?
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>It makes your notes safe and encrypted</strong> 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ullam ducimus velit eos quo. Ipsum ex, culpa et aspernatur ipsam porro aut, odio debitis esse repellendus architecto quae reprehenderit unde magni, nam repudiandae veritatis.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Contact Us
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
              <p>Hello, I am Tushar Gandhi, a programmer and web developer with proficient skills in various programming languages and web technologies. With years of experience in the field, I have a strong passion for creating efficient and effective web applications that are user-friendly and visually appealing. I believe in constantly learning and adapting to new technologies to provide the best solutions to my clients. My aim is to create innovative and intuitive web experiences that cater to the needs of modern-day businesses and individuals.</p>
                Developer-Tushar Gandhi <br />
                Gamil-gandhitushar509@gmail.com
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default About
