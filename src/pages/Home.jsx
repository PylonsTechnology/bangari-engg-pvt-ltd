const HeroSection = () => {
  return (
      <>
    <div className="relative w-full h-screen text-white flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        {/* <source src="https://cdn.pixabay.com/video/2021/06/20/78331-565417488_large.mp4" type="video/mp4" /> */}
         <source src="https://cdn.pixabay.com/video/2020/05/24/40054-424371552_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full "></div>

      {/* Text Content */}
      <div className="relative z-10 text-center  px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl  font-extrabold drop-shadow-lg">BANGARI ENGINEERING PVT LTD</h1>
        
      </div>
    </div>
    <div className="bg-gray-100 py-16 px-6 md:px-12">
  <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
    <p className="text-lg md:text-xl mt-4 leading-relaxed drop-shadow-md">
      <h2 className="text-3xl text-red-600 font-bold" >BANGARI ENGINEERING PVT LTD</h2>
      Established in <strong>2019</strong>, we are one of the leading business houses in <strong>Bhilai (C.G.)</strong>.
      With the growing demand for <strong>Infrastructure, Engineering, Goods, and Services</strong>,
      we have expanded our facilities for <strong>Engineering and Steel Fabrication</strong> for various steel plants.
    </p>

    <p className="text-lg md:text-xl mt-4 leading-relaxed drop-shadow-md">
      Our Clients include various <strong>small and large-scale industries</strong>, providing <strong>manpower services</strong>
      and fabrication capacities of <strong>300 MT–350 MT per month</strong>, ensuring <strong>top quality</strong> and <strong>timely delivery</strong>.
    </p>

    <p className="text-lg md:text-xl mt-4 font-semibold drop-shadow-md">
      Our main focus is <span className="text-red-500">Quality</span> and <span className="text-red-500">On-time Delivery</span>,
      building strong business relationships and earning repeat orders from esteemed clients.
    </p>

    <button className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-bold rounded-lg hover:bg-red-600 transition drop-shadow-lg">
      Learn More
    </button>
  </div>
</div>

    
    </>
  );
};

export default HeroSection;