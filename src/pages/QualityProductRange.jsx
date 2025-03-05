import React from 'react'

function QualityProductRange() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900">Quality and Product Range</h2>
      <div className="border-b-4 border-red-500 w-24 mx-auto my-4"></div>
    </div>

    <div className="max-w-6xl mx-auto mt-6 text-gray-700 text-lg leading-relaxed">
      <h3 className="text-2xl font-bold text-gray-900">Quality Policy</h3>
      <h4 className="text-xl font-bold text-gray-900 mt-2">Our Mission in Quality System</h4>
      <p className="mt-2">
        AJ Industries is committed to Manufacturing (Fabrication & Machining). Equipments of superior quality within a specified time to achieve customer satisfaction in all aspects of performance and reliability by continual improvement through established quality management system, employee involvement, and reviewing the established objectives of the organization from time to time.
      </p>
    </div>

    <div className="max-w-6xl mx-auto mt-12">
      <h3 className="text-2xl font-bold text-gray-900 text-center">Product Range</h3>
      <div className="border-b-4 border-red-500 w-24 mx-auto my-4"></div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-left text-gray-900">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="p-3 border border-gray-300">Products</th>
              <th className="p-3 border border-gray-300">Categories</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="p-3 border border-gray-300 font-semibold">Star & Box Column, Ducts, Tank, Gallery, Truss, Monorail</td>
              <td className="p-3 border border-gray-300">Chutes</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300 font-semibold">Column & Beam</td>
              <td className="p-3 border border-gray-300">Banker hopper</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="p-3 border border-gray-300 font-semibold">Built-up Beam & Tie Beams</td>
              <td className="p-3 border border-gray-300">Platforms</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300 font-semibold">Equipments</td>
              <td className="p-3 border border-gray-300">Buckstay & Box Columns</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

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

    <div className="text-center mt-10">
      <button className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg hover:bg-red-600 transition">
        Learn More
      </button>
    </div>
  </section>

  )
}

export default QualityProductRange