import React from "react";
import Slider from "react-slick";
import './HomePage.css'; // Ensure this imports the necessary styles
import downloadImage from './images/download.png'
import downloadImage1 from './images/news.jpeg'
import downloadImage2 from './images/news.jpeg'
import downloadImage3 from './images/news.jpeg'

const HomePage = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Faster transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000, // 3 seconds for auto slide
    arrows: true, // Enable arrows for navigation
    fade: true,
    pauseOnHover: false, // Ensure it continues even on hover
    cssEase: 'ease-in-out', // Linear transition for continuous feel
  };

  const slides = [
    {
      image: 'https://tamil.samayam.com/photo/112229387/nbt-video.jpg',
      text: 'மும்பை பங்குச் சந்தையில் ஓலா எலெக்ட்ரிக் நிறுவனத்தின் பங்குகள் 10 சதவீதம் உயர்ந்துள்ளன.'
    },
    {
      image: 'https://tamil.samayam.com/photo/111384690/nbt-video.jpg',
      text: 'புதுச்சேரியில் தனியார் பேருந்தின் படியில் நின்று பயணம் செய்த கல்லூரி மாணவர், தடுமாறி கீழே விழுந்து பலத்த காயம் அடைந்தார்.'
    },
    {
      image: 'https://tamil.samayam.com/photo/112647442/photo-112647442.jpg',
      text: 'தமிழ்நாட்டில் எம்.பி.பி.எஸ் மற்றும் பி.டி.எஸ் மருத்துவப் படிப்புகளுக்கான தரவரிசை பட்டியல் ஆகஸ்ட் 19ஆம் தேதி வெளியானது. பொது கலந்தாய்வு ஆன்லைன் வழியாக ஆகஸ்ட் 21ஆம் தேதி முதல் ஆகஸ்ட் 27ஆம் தேதி வரை நடைபெறவுள்ளது. இந்நிலையில், அரசு பள்ளி மாணவர்களுக்கான 7.5% இடஒதுக்கீடு கலந்தாய்வு சென்னையில் நேரடியாக ஆகஸ்ட் 22ஆம் தேதி நடைபெறவுள்ளது.'
    }, {
      image: "https://tamil.samayam.com/photo/112648240/photo-112648240.jpg",
      text: 'வேங்கை வயல் கிராமத்தில் குடிநீர் மேல்நிலை நீர்த்தேக்க தொட்டியில் மனித கழிவு கலந்த விவகாரத்தில் சிபிசிஐடி குற்றப்பத்திரிகை தாக்கல் செய்ய கால அவகாசம் கேட்டு மனு தாக்கல் செய்துள்ளது.'
    }
  ];

  const datas = [
    {
      cardTitle: "நல்ல செய்தி சொன்ன முதல்வர் மு.க.ஸ்டாலின் ",
      cardText: "கோவை மக்களுக்கு முதல்வர் மு.க.ஸ்டாலின் நல்ல செய்தி சொல்லியுள்ளதாக பாஜக சட்டமன்ற உறுப்பினர் வானதி சீனிவாசன் தெரிவித்துள்ளார்.",
      image: "https://tamil.samayam.com/photo/112488590/nbt-video.jpg",
    },
    {
      cardTitle: "முக ஸ்டாலின் இதை செய்தால் தான் ரயில்வே பணிகள் நடக்கும்: அஷ்வினி வைஷ்ணவ் கறார்",
      cardText: "தமிழ்நாட்டில் ரயில்வே பணிகளுக்கு நிதி ஒதுக்க கோரி முக ஸ்டாலின் தரப்பில் மத்திய ரயில்வே அமைச்சர் அஷ்வினி வைஷ்னவிற்கு கடிதம் எழுதப்பட்டது. இதற்கு பதில் அளித்துள்ள ரயில்வே அமைச்சா், தமிழக அரசு சார்பில் செய்ய வேண்டிய விஷயங்களை முடித்து கொடுத்தால் தான் பணிகள் நடத்த முடியும் என கூறி உள்ளார்.",
       image: "https://tamil.samayam.com/photo/112632085/nbt-video.jpg",
    },
    {
      cardTitle: "Vidaamuyarchi Update: அஜித்தின் முடிவிற்காக காத்துக்கொண்டிருக்கும் கவின்..இவர் லிஸ்ட்லயே இல்லையே..! ",
      cardText: "அஜித் தற்போது விடாமுயற்சி மற்றும் குட் பேட் அக்லி திரைப்படத்தில் நடித்து வருகின்றார். விடாமுயற்சி திரைப்படம் தீபாவளிக்கு வெளியாகும் என எதிர்பார்க்கப்பட்டு வரும் நிலையில் நடிங்கர் கவின் அஜித்தின் முடிவிற்காக ஆவலாக காத்துகொண்டு இருப்பதாக தகவல்கள் வருகின்றன", 
      image:  "https://tamil.samayam.com/photo/112593757/nbt-video.jpg",
    },
    {
      cardTitle: "திருவனந்தபுரம் டூ வேளாங்கண்ணி சிறப்பு ரயில் இயக்கம்... எந்த தேதிகளில்? முழு தகவல் இங்கே! ",
      cardText: "வேளாங்கண்ணி பேராலயம் திருவிழாவிற்காக கேரளா மாநிலம் திருவனந்தபுரம் - வேளாங்கண்ணி இடையே சிறப்பு ரயில்கள் இயக்கப்பட உள்ளது என தெற்கு ரயில்வே அறிவித்துள்ளது.",
       image: "https://tamil.samayam.com/photo/111084799/nbt-video.jpg",
    },

  ];

  return (
    <>
      <div className="container"></div>
      <div className="marquee-container">
        <div className="marquee">
          <p>TN NEET Medical Counselling 2024 : தமிழ்நாட்டில் எம்.பி.பி.எஸ் மற்றும் பி.டி.எஸ் மருத்துவப் படிப்புகளுக்கான தரவரிசை பட்டியல் ஆகஸ்ட் 19ஆம் தேதி வெளியானது. பொது கலந்தாய்வு ஆன்லைன் வழியாக ஆகஸ்ட் 21ஆம் தேதி முதல் ஆகஸ்ட் 27ஆம் தேதி வரை நடைபெறவுள்ளது. இந்நிலையில், அரசு பள்ளி மாணவர்களுக்கான 7.5% இடஒதுக்கீடு கலந்தாய்வு சென்னையில் நேரடியாக ஆகஸ்ட் 22ஆம் தேதி நடைபெறவுள்ளது.</p>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.image} alt={`Slide ${index}`} className="slide-image" />
              <div className="slide-text">
                {slide.text}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="card-page">
        <div className="heading-title">Latest Updates</div>
        <div className="cards-container">
          {datas.map((data, index) => (
            <div className="card" key={index}>
              <img src={data.image} alt="Card Image" />
              <div className="card__content">
                <p className="card__title">{data.cardTitle}</p>
                <p className="card__description">{data.cardText}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default HomePage;
