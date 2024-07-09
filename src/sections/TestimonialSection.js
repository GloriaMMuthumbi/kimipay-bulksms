import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    img: "https://source.unsplash.com/random/100x100?1",
    quote: "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!",
    name: "Leroy Jenkins",
    title: "CEO of Company Co."
  },
  {
    img: "https://source.unsplash.com/random/100x100?2",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    name: "Jane Doe",
    title: "CTO of Example Inc."
  },
  {
    img: "https://source.unsplash.com/random/100x100?3",
    quote: "Nunc malesuada eget est fringilla dapibus. Nullam auctor lacus et lorem facilisis, at commodo dolor.",
    name: "John Smith",
    title: "Lead Developer at Tech LLC"
  },
  {
    img: "https://source.unsplash.com/random/100x100?4",
    quote: "Proin gravida, ipsum nec sollicitudin ullamcorper, sapien felis egestas velit, id consequat erat leo eu leo.",
    name: "Alice Johnson",
    title: "Product Manager at Innovate Ltd."
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
    // Clear and reset the interval to synchronize with manual transition
    clearInterval();
    setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <section className="px-6 py-24">
        <div className='flex flex-col px-52 items-center justify-center h-full'>
        <p className='uppercase text-kimiBlue raleway text-sm font-medium tracking-widest mb-1'>Testimonials</p>
        <h2 className='text-4xl font-semibold montserrat mb-2 w-1/2 text-center'>From our customers to you:</h2>
        <p className='raleway font-medium w-5/6 text-center mb-5'>Real stories, real satisfaction. Discover why they choose us for quality and reliability for their needs.</p>
        </div>
      <div className="container max-w-xl mx-auto shadow-lg rounded-lg transition-transform duration-500 transform">
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
          {/* <img src={testimonials[currentIndex].img} alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" /> */}
          <blockquote className="max-w-lg text-lg italic font-medium text-center font-raleway">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          <div className="text-center dark:text-gray-600 font-montserrat">
            <p>{testimonials[currentIndex].name}</p>
            <p>{testimonials[currentIndex].title}</p>
          </div>
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Page ${index + 1}`}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? 'dark:bg-kimiBlue-dark' : 'dark:bg-kimiBlue'}`}
                onClick={() => handleButtonClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
