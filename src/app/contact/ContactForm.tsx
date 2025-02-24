"use client";

import { FormEvent, useState } from "react";

interface Props {
  className?: string;
  /* TODO: Add Additional Props Here */
}

export function ContactForm({ className }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("General");

 
   // TODO: Attach this function to the form like so <form onSubmit={onSubmit}>
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true); // Start Loading

    try {
      const formData = new FormData(event.currentTarget);

      // TODO: Remove mock delay for testing
      const seconds = 1.5;
      await new Promise(resolve => setTimeout(resolve, seconds * 1000));

      // TODO: Implement API calls with formData (we don't need to worry about this part!)
      console.log(formData)

    } catch (error) {
      // Error Handling
      console.error("Error submitting form: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  
  return (
  
  <div className={`max-w-5xl mx-auto p-6 ${className} mt-4 `}>
  <div className="flex justify-between">
  
    
    {/* Left Section - Contact Form */}
  <div className="w-3/5 bg-white shadow-lg rounded-lg p-6 border border-grey-300">
  <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
    <form onSubmit={onSubmit} className="space-y-4">


    {/*Category*/}
    <div>
        <label htmlFor="category" className="block font-small mb-1">Category</label>
        <select
        id="category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded bg-white text-sm text-gray-600"
        required
        >
          <option value="General">General</option>
          <option value="Technical Issues">Technical Issues</option>
          <option value="Business Inquiry">Business Inquiry</option>
        </select>
      </div>
     
      {/*Name*/}
      <div>
        <label htmlFor="name" className="block font-small">Name<span className="text-red-500">*</span></label>
        <input 
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded h-10"
          required />
          {/*!message.trim() && <p className="text-red-500 text-sm mt-1">This field is required</p>*/}
      </div>
      
      {/*Email*/}
      <div>
        <label htmlFor="email" className="block font-small">Email<span className="text-red-500">*</span></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded h-10"
          required />
          {/*!message.trim() && <p className="text-red-500 text-sm mt-1">This field is required</p>*/}

      </div>

      {/*Message*/}
      <div>
        <label htmlFor="message" className="block font-small">Message<span className="text-red-500">*</span></label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded h-28"
          required />
          {/*!message.trim() && <p className="text-red-500 text-sm mt-1">This field is required</p>*/}
      </div>
      <button 
      type="submit" 
      disabled={isLoading}
      className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400">

      
        {isLoading ? "Sending..." : "Submit"}
      </button>
    </form>
    </div>


 {/* Right Section - Contact Info */}
 <div className="w-2/5 ml-4 space-y-4 ">
          
          {/* Email Box */}
          <div className=" bg-white shadow-lg rounded-lg p-3 border border-grey-300">
            <p className="font-small flex items-center">
              Email us at: <a href="mailto:ucla@gmail.com" className="text-blue-600 ml-1">ucla@gmail.com</a>
            </p>
          </div>

          {/* Phone Box */}
          <div className=" bg-white shadow-lg rounded-lg p-3 border border-grey-300">
            <p className="font-small flex items-center">
              Call us at: <span className="ml-1">111-222-3333</span>
            </p>
            <p className="text-gray-500 text-sm">Available on weekdays 9:00am to 5:00pm (PST)</p>
          </div>

          {/* Address Box */}
          <div className=" bg-white shadow-lg rounded-lg p-3 border border-grey-300">
            <p className="font-small flex items-center">
              Our address:
            </p>
            <p className="text-gray-600 text-sm">
              123 UCLA Drive<br />
              Los Angeles, California<br />
            </p>
          </div>
    </div>
  </div>
</div>
  );

}
