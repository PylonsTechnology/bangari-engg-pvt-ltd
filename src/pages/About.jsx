import React from 'react'

function About() {
  return (
    <>
    <section className="bg-gray-100 py-16 px-6 md:px-12">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
      <div className="border-b-4 border-red-500 w-24 mx-auto my-4"></div>
      <h3 className="text-2xl font-semibold text-gray-700 mt-2">
        Two Decades Of Fabrication Excellence With Quality At Its Best!
    {/* Company’s Legal and Statutory Details */}
    <div className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-2xl font-bold text-gray-900 text-center">Company’s Legal and Statutory Details</h4>
      <div className="mt-4 text-gray-700 text-lg leading-relaxed">
        <p><strong>Company Name:</strong> BANGARI ENGINEERING PRIVATE LIMITED</p>
        <p><strong>Head Office Address:</strong></p>
        <p><strong>Phone No.:</strong></p>
        <p><strong>Email:</strong></p>
        <p><strong>Mobile No.:</strong> 9770807344, 9755180066</p>
        <p><strong>Work Address:</strong> Heavy Industrial Area, Bhilai, Durg, Chhattisgarh, 490023</p>
        <p><strong>Company Registration No.:</strong></p>
        <p><strong>CIN:</strong> U25990CT2024PTC017235</p>
        <p><strong>PAN No.:</strong> AANCB1297Q</p>
        <p><strong>GSTIN/TRN:</strong> 222500002199TRN</p>
        <p><strong>Email Id:</strong> murthy.raman1983@gmail.com, neelrao38@gmail.com</p>
      </div>
    </div>
      </h3>
    </div>

    <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-10 items-center">
      {/* Video Section */}
      <div className="w-full">
        <video className="w-full rounded-lg shadow-lg" controls>
          <source src="https://cdn.pixabay.com/video/2020/05/24/40054-424371552_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Section */}
      <div className="text-gray-700 text-lg leading-relaxed">
        <h4 className="text-xl font-bold text-gray-900">Introduction</h4>
        <p className="mt-2">Bangari Engineering Pvt Ltd, established in 2019, is one of the leading business houses in Bhilai, C.G., specializing in Infrastructure, Engineering, and Steel Fabrication.</p>
        
        <h4 className="text-xl font-bold text-gray-900 mt-6">Basic Corporate Data</h4>
        <p className="mt-2">We have expanded our facilities to cater to various steel plants and provide top-quality fabrication services.</p>
        
        
        <h4 className="text-xl font-bold text-gray-900 mt-6">Vision</h4>
        <p className="mt-2">To be a global leader in steel fabrication and infrastructure solutions, setting new industry standards.</p>
        
        <h4 className="text-xl font-bold text-gray-900 mt-6">Mission</h4>
        <p className="mt-2">Delivering high-quality products with a commitment to innovation, customer satisfaction, and sustainability.</p>
        
        <h4 className="text-xl font-bold text-gray-900 mt-6">Our Philosophy</h4>
        <p className="mt-2">We believe in excellence, integrity, and on-time delivery, ensuring long-term partnerships with our esteemed clients.</p>
      </div>
    </div>

    

    <div className="text-center mt-10">
      <button className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg hover:bg-red-600 transition">
        Learn More
      </button>
    </div>
  </section>
  </>
  )
}

export default About