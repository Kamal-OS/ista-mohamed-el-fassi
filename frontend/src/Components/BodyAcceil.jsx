import React, { useState } from 'react';
import img1 from '../assets/images/image.png';
import img2 from '../assets/images/image2.png';
import img3 from '../assets/images/image3.png';
function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
        src:img1,
        titreImage:'Les opportunités dans le monde de l’IA',
        textImage:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        src:img2,
        titreImage:'China-North Africa Competition with OFPPT',
        textImage:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        src:img3,
        titreImage:'Les calendriers des examens fin de formation',
        textImage:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).o using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).o using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div id="controls-carousel" className="relative w-full " data-carousel="static">
      <div className="relative h-56 overflow-hidden md:h-[600px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
              activeIndex === index ? 'block' : 'hidden'
            }`}
            data-carousel-item
          >
          <img 
          src={image.src} 
          className="w-full h-full " // This ensures the whole image is visible without cropping
          alt={`carousel-item-${index}`} 
          /> 
        <div class="absolute top-40 right-0 p-7 w-[450px] h-[270px] bg-[#004A93] text-white p-6 overflow-hidden">
            <h3 class="text-[23px] font-bold mb-2">{image.titreImage}</h3>
            <p class="text-sm line-clamp-5 w-[360px]">{image.textImage}</p>
        </div> 
        
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500  dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
// 
function CreateCard({img, titre, text, bg}) {
    return (
        <>
             <div 
                className={'flex flex-col items-center gap-4 w-[234px] h-[212px] rounded-[14px] p-7'}
                // I use this declaration of bg because sometime Tailwind not support bg in class
                style={{ backgroundColor: bg }}
            >
                <div className="flex flex-col items-center gap-2">
                    <img 
                    src={img} 
                    alt="Formation Icone" 
                    className='w-[50px] h-[50px]'
                    />
                    <span className="text-xl font-semibold text-white text-center">{titre}</span>
                </div>
                <div className="text-[14px] text-white text-center">
                    {text}
                </div>
            </div>
        </>
    )
}
function CardsAccueil() {
    return (
        <>
        <div id="CardAccueil" className="w-full mt-5 mb-5  h-[250px] py-4 container mx-auto">
            <div className="flex justify-center gap-24 ">
                <CreateCard 
                    img="https://img.icons8.com/?size=100&id=11173&format=png&color=FFFFFF" 
                    titre='NOS formations' 
                    text='Tous les cours disponibles dans notre établissement'
                    bg='#004a93'
                />

                <CreateCard 
                    img="https://img.icons8.com/?size=100&id=104385&format=png&color=FFFFFF" 
                    titre='E-COURS' 
                    text='Votre passerelle vers la plateforme e-learning'
                    bg='#00904a'
                />
                <CreateCard 
                    img="https://img.icons8.com/?size=100&id=79615&format=png&color=FFFFFF" 
                    titre='Emplois du temps' 
                    text='Accédez aux emplois du temps de votre formation'
                    bg='#a4a3a3'
                />

            </div>
        </div>
        </>
    )
}
// Annonce Recente Accueil
function CreateLine({icone, titre}) {
    return (
        <>
        <div className="flex items-center justify-center gap-2 w-full my-6">
            <div className="flex-grow h-[1.5px] bg-[#004a93]"></div>
            <div className="flex items-center gap-2 px-4">
                <img src={icone} alt="icon" className="w-10 h-10]" />
                <span className="text-2xl font-semibold text-[#004a93]">{titre}</span>
            </div>
            <div className="flex-grow h-[1.5px] bg-[#004a93]"></div>
        </div>
        </>
    )
}
function Actualitess() {
    return (
        <>
            <div  className="w-full mt-5 mb-5  h-[250px] py-4 container mx-auto">
                <CreateLine icone={"https://img.icons8.com/?size=100&id=7KrtVrmFGsl3&format=png&color=000000"} titre={"Actualitéss"}/>
            </div>
        </>
    )
}
function BodyAcceil() {
  return (
    <>
      <Carousel />
      <CardsAccueil />
      <Actualitess />
    </>
  );
}

export default BodyAcceil;
