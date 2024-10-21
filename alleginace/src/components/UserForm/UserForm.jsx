
import  { useState } from 'react';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [leadMessage, setLeadMessage] = useState('');
  const [notes,] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Phone: phone,
      Lead_Message__c: leadMessage,
      Notes__c: notes,
      Campaign_Name__c: 'API End - Mustafa',
      Marketing_Campaign__c: 'true',
      Pipeline__c: 'Primary',
      Assignment_Status__c: 'Assigned',
      LeadSource: 'Whatsapp',
    };

    try {
      const response = await fetch('/api', { // Using Proxy
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Error submitting the form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
   
<div className="container h-max rounded-t-[120px] border-1 border-gray-500 md:px-64 bg-form">

<h2 className="text-4xl font-semibold pt-16">Our Expert Will Help You
<br></br>Buy The Best Property in <span className="text-cyan-500">Dubai</span> </h2>


<section className="relative flex flex-wrap gap-8 lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-12/12 lg:px-8 lg:py-12 border-gray-700 border-solid bg-white bg-opacity-45 rounded-xl">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Let Us Help You Today</h1>

      <p className="mt-4 text-gray-500">
        Get it touch with our agents to choose the write property for you 
      </p>
    </div>

    <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="firstName" className="sr-only">First Name</label>
        <div className="relative">
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter First Name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="lastName" className="sr-only">Last Name</label>
        <div className="relative">
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Last Name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <div className="relative">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="sr-only">Phone</label>
        <div className="relative">
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Phone"
          />
        </div>
      </div>

      <div>
        <label htmlFor="leadMessage" className="sr-only">Lead Message</label>
        <div className="relative">
          <textarea
            id="leadMessage"
            value={leadMessage}
            onChange={(e) => setLeadMessage(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
            placeholder="Enter your message"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Send Us
        </button>
      </div>
    </form>
  </div>

 
</section>
</div>
  )
}

export default UserForm