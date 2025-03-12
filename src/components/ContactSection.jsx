import React, { useState } from 'react'

const ContactSection = () => {
    
    const [formData, setFormData] = useState({})
    
    const handleInput = (e) => {
        let name = e.target.value;
        let value = e.target.value;  
        setFormData({...formData, [name]: value})  
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        alert('Message Sent!')
    }

  return (
    <section id='contact' className='w-full py-20 px-24 h-screen'>
      <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-md bg-[#f9f9f9]">
      <h2 className="text-2xl font-bold mb-4 text-[#0637B1] text-center">Let's Connect!</h2>
      <p className='text-[#0637B1] opacity-70 my-4 text-center'>Feel free to reach out anytime. Let's create something amazing together!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700" >Full Name</label>
          <input
            type="text"
            name="name"
            onChange={handleInput}
            placeholder='Joe Doe'
            value={formData.name}
            className="w-full mt-1 p-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleInput}
            placeholder='abc123@gmail.com'
            value={formData.email}
            className="w-full mt-1 p-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            rows="4"
            onChange={handleInput}
            placeholder='Message!'
            value={formData.message}
            className="w-full mt-1 p-2 border rounded-lg"
            required
          />
        </div>

        <div className='w-full flex justify-center'>
            <button
            className="w-30 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
            >
            Send Message
            </button>
        </div>
      </form>
    </div>
    </section>
  )
}

export default ContactSection
