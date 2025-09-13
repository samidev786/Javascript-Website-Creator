var userName = prompt(`plz enter user name `)
var themeColor = prompt(`write the primary color you want to use in your website`,`red`)
var navAsk = prompt(
  `do you want to build a navbar in your website?\nYes\nNo`,`yes`
).toLowerCase();
if (isNaN(navAsk) === false) {
  console.log(`you entered incorrect data`);
} 
else {
  if (navAsk == "yes") {
    var noOfNavLinks = +prompt(
      `how many links you want to add in your navbar?`
    );
    if (isNaN(noOfNavLinks)) {
      console.log(`you entered incorrect data.refresh to try again`);
    } else {
      // navbar start
      navBrand = prompt(`what name you want to add in your navbar's heading?`,`My Site`);
      document.writeln(`
                <nav class="navbar navbar-expand-lg fixed-top" style='color:white;background-color:${themeColor};'>
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style='font-weight:bold;font-size:2.2rem;color:white;'>${navBrand}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
 
                `);
      for (var i = 0; i < noOfNavLinks; i++) {
        var navlinkName = prompt(
          `what name do you want to give to your ${i + 1} link of navbar`
        );
        var navlinkURL = prompt(
          `what URL do you want to give to your ${i + 1} link of navbar`
        );
        document.writeln(
          `<a class="nav-link" style="color:white;font-size:1.2rem;" href="${navlinkURL}">${navlinkName}</a>`
        );
      }
      // navbar ending
      document.writeln(`
            </div>
    </div>
  </div>
</nav>
            `);
    }
  }

  var heroAsk = prompt(
  `do you want to build a hero section in your website?\nYes\nNo`,`yes`
).toLowerCase();
if (isNaN(heroAsk) === false) {
  console.log(`you entered incorrect data`);
} 
else{
if(heroAsk==="yes"){
    // hero section 
    var bgImgHero = prompt(`paste the link og background image you want to add in your hero section`,"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80")
    var heroMainH = prompt(`Enter main heading of hero section`,`Your Vision, Our Commitment`)
    var heroPara = prompt(`Enter paragraph for hero section`,`We design solutions that empower people and businesses to reach their full potential. Simple, reliable, and built for the future.`)
    var heroBtnText = prompt(`Enter text for button of hero section`,`Discover More`)
    document.writeln(`
          <div style="height: 100vh; background-image: url(${bgImgHero}); background-size: cover; background-position: center;" class="position-relative w-100" id='home'>
  <div class="position-absolute text-white d-flex flex-column align-items-start justify-content-center" style="top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0,0,0,.7);">
    <div class="container">
      <div class="col-md-6">
       
        <!-- on small screens remove display-4 -->
        <h1 class="mb-4 mt-2 display-4 font-weight-bold" style='font-weight:bolder;'><span style='color:${themeColor};'>${heroMainH}</span></h1>
        <p  style="color: #bbb;font-size:1.2rem !important;">${heroPara}</p>
        <div class="mt-5">
          <!-- hover background-color: white; color: black; -->
           <a href="#" class="btn px-3 py-2 text-white mt-3 mt-sm-0" style="border-radius: 30px;background-color:${themeColor};font-size:1.5rem;">${heroBtnText}</a>
        </div>
      </div>
    </div>
  </div>
</div> 

        `)

}
}


var aboutAsk = prompt(
  `do you want to build a about section in your website?\nYes\nNo`,`yes`
).toLowerCase();
if (isNaN(aboutAsk) === false) {
  console.log(`you entered incorrect data`);
} 
else{
if(aboutAsk === "yes"){
    var aboutH = prompt(`enter the main heading of about section`,`About Us`)
    var aboutPara = prompt(`enter the Paragraph of about section`,`We are more than just a service provider – we are your trusted partner in growth. Our team is passionate about creating solutions that are innovative, practical, and tailored to your unique needs. With years of experience across multiple industries, we bring together creativity and technical expertise to deliver exceptional results. From designing user-friendly websites to providing strategic support, our focus is always on quality and customer satisfaction. We believe in building long-term relationships with our clients, where collaboration, trust, and transparency form the foundation of everything we do. Together, we aim to transform ideas into meaningful outcomes that inspire progress and success.`)
    var imgAbout = prompt(`paste the url of the image of about section`,"https://i.ibb.co/qpz1hvM/About-us.jpg")
    document.writeln(`
          <section class="section_all bg-light" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title_all text-center">
                          <h2 class="font-weight-bold display-4 ">About <span style='color:${themeColor};'>Us</span></h2>
                           
                            <div class="">
                                <i class=""></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row vertical_content_manage mt-5">
                    <div class="col-lg-6">
                        <div class="about_header_main mt-3">
                            
                            <p class="text-muted mt-3"style='font-size:1.2rem;'>${aboutPara}</p>

                           
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="img_about mt-3">
                            <img src="${imgAbout}" style='border-radius:0.8rem' alt="" class="img-fluid mx-auto d-block">
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </section> 
        `)
}
}
var serviceAsk = prompt(
  `do you want to build a service section in your website?\nYes\nNo`,`yes`
).toLowerCase();
if (isNaN(serviceAsk) === false) {
  console.log(`you entered incorrect data`);
} 
else{
if(serviceAsk === "yes"){
    document.writeln(`
     <div class="container my-5 services" id='services'>
    <section>
        <div class="text-center mb-5">
          
            <h2 class="font-weight-bold display-4 ">Our <span style='color:${themeColor};'>Services</span></h2>
        </div>
        <div class="row">`)
        var noOfServices = +prompt(`Enter the number of services you want`)
        if(isNaN(noOfServices)){
            console.log(`you entered incorrect data.Refresh to try again`)
        }
        else{
        
   for(var i=0;i<noOfServices;i++){
            var serviceName = prompt(`enter the name of ${i+1}st service you want`,`My Service ${i+1}`)
             var servicePara = prompt(`enter a short paragraph of ${i+1}st service you want`,`We provide modern solutions to help you grow and succeed.`)
         document.writeln(`
  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
    <div class="p-4 text-center" style="border:1px solid ${themeColor}; border-radius:0.5rem; height:100%;">
      <i class="fab fa-servicestack fa-2x mb-3" style="color:${themeColor};"></i>
      <h3 class="text-uppercase mb-3" style="font-weight:600; color:${themeColor};">${serviceName}</h3>
      <p style="max-width:70%; margin:0 auto;">${servicePara}</p>
    </div>
  </div>
`);


        }
document.writeln(`
            </div>
    </section>
</div>

    `)


}
}
var contactAsk = prompt(
  `do you want to build a contact section in your website?\nYes\nNo`,`yes`
).toLowerCase();
if (isNaN(contactAsk) === false) {
  console.log(`you entered incorrect data`);
} 
else{
    if(contactAsk === "yes"){
document.writeln(`
    <section class="contact-page-sec" id='contact'>
    <h2 class="font-weight-bold display-4 text-center my-4 ">Contact <span style='color:${themeColor};'>Us</span></h2>
    <div class="container">
      <div class="row">
        <div class="col-md-4" >
          <div class="contact-info">
            <div class="contact-info-item"  style='border-radius:0.5rem !important'>
              <div class="contact-info-icon">
                <i class="fas fa-map-marked"></i>
              </div>
              <div class="contact-info-text">
                <h2>address</h2>
                <span>1215 Lorem Ipsum, Ch 176080 </span> 
                <span>Chandigarh , INDIA</span> 
              </div>
            </div>            
          </div>          
        </div>          
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item" style='border-radius:0.5rem !important'>
              <div class="contact-info-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-info-text">
                <h2>E-mail</h2>
                <span>info@LoremIpsum.com</span> 
                <span>yourmail@gmail.com</span>
              </div>
            </div>            
          </div>                
        </div>                
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item" style='border-radius:0.5rem !important'>
              <div class="contact-info-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="contact-info-text">
                <h2>office time</h2>
                <span>Mon - Thu  9:00 am - 4.00 pm</span>
                <span>Thu - Mon  10.00 pm - 5.00 pm</span>
              </div>
            </div>            
          </div>          
        </div>          
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="contact-page-form" method="post">
            <h2>Get in Touch</h2> 
            <form action="contact-mail.php" method="post">
              <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Your Name" name="name"/>
                </div>
              </div>  
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="email" placeholder="E-mail" name="email" required/>
                </div>
              </div>                              
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Phone Number" name="phone"/>
                </div>
              </div>  
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Subject" name="subject"/>
                </div>
              </div>                
              <div class="col-md-12 message-input">
                <div class="single-input-field">
                  <textarea  placeholder="Write Your Message" name="message"></textarea>
                </div>
              </div>                                                
              <div class="single-input-fieldsbtn">
                <input type="submit" value="Send Now" style='background-color:${themeColor}'/>
              </div>                          
            </div>
            </form>   
          </div>      
        </div>
        <div class="col-md-4">        
          <div class="contact-page-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873658222!3d30.73506264436677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1553497921355" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>          
        </div>        
      </div>
    </div>
  </section>

    `)
    }

}
var footerAsk = prompt(
  `do you want to add a footer in your website?\nYes\nNo`,`yes`
).toLowerCase();
if (isNaN(footerAsk) === false) {
  console.log(`you entered incorrect data`);
} 
else{
  if(footerAsk === "yes"){
var fontColor = "white";
if(themeColor == ""){
fontColor = "black";
}
else{
  fontColor = "white"
}
    var footerPara = prompt(`plz enter the footer paragraph`,`Copyright © 2025 | Developed by ${userName} | All Rights Reserved.`)
document.writeln(`
    <footer id='footer' style='background-color:${themeColor};color:${fontColor};margin:0px !important'>
        <p class='m-0'>${footerPara}</p>
    </footer>

    `)
  }
    
}
        }
     

}
