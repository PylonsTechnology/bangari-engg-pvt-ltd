const ContactUs = () => {
    return (
      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Contact Us</h2>
          <div className="border-b-4 border-red-500 w-24 mx-auto my-4"></div>
  
          <div className="mt-6 text-gray-700 text-lg leading-relaxed">
            <p><strong>Company Name:</strong> BANGARI ENGINEERING PRIVATE LIMITED</p>
  
            <h3 className="text-xl font-bold text-gray-900 mt-4">Corporate Office</h3>
            <p><strong>Work Address:</strong> Heavy Industrial Area, Bhilai, Durg, Chhattisgarh, 490023</p>
  
            <h3 className="text-xl font-bold text-gray-900 mt-4">Contact Details</h3>
            <p><strong>Phone:</strong> <a href="tel:9770807344" className="text-red-500 hover:underline">9770807344</a>, <a href="tel:9755180066" className="text-red-500 hover:underline">9755180066</a></p>
            <p><strong>Email:</strong> <a href="mailto:murthy.raman1983@gmail.com" className="text-red-500 hover:underline">murthy.raman1983@gmail.com</a>, <a href="mailto:neelrao38@gmail.com" className="text-red-500 hover:underline">neelrao38@gmail.com</a></p>
  
            <h3 className="text-xl font-bold text-gray-900 mt-4">Legal Details</h3>
            <p><strong>CIN:</strong> U25990CT2024PTC017235</p>
            <p><strong>PAN No.:</strong> AANCB1297Q</p>
            <p><strong>GSTIN/TRN:</strong> 222500002199TRN</p>
          </div>
  
          {/* Google Map - Optional */}
          <div className="mt-8">
            <iframe
              className="w-full h-64 rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.660679185123!2d81.32205497407323!3d21.185491080488936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a292243ca3b0d8f%3A0x6e679c19b89a7e9a!2sHeavy%20Industrial%20Area%2C%20Bhilai%2C%20Chhattisgarh%20490023!5e0!3m2!1sen!2sin!4v1709558326258"
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactUs;
  