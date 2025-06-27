'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className=" rounded-lg shadow-sm p-16 w-full h-full ">
        {/* Header - Kept exactly the same */}
        <div className="flex items-center mb-8">
          <div className="text-6xl flex font-light text-gray-700 mb-15">
            Coming <span className="text-green-500 font-extralight ml-2">Soon</span>
          </div>
          <p className="text-gray-400 mb-13 text-xl ml-8 tracking-widest uppercase leading-relaxed px-4">
WE&apos;RE EXCITED TO HEAR FROM YOU AND ASSIST IN ANY WAY WE CAN          </p>
        </div>

        {/* Form - Same styling, just updated fields */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-16">
            <div>
              <label className='text-black' htmlFor="first_name">First Name</label>
              <input
                {...register('firstName', { required: true })}
                type="text"
                placeholder="Type Here"
                className="w-full text-gray-600 text-sm bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none py-3 placeholder-gray-400"
              />
              {errors.firstName && <span className="text-red-500 text-xs">Required</span>}
            </div>
            <div>
              <label className='text-black' htmlFor="last_name">Last Name</label>
              <input
                {...register('lastName', { required: true })}
                type="text"
                placeholder="Type Here"
                className="w-full text-gray-600 text-sm bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none py-3 placeholder-gray-400"
              />
              {errors.lastName && <span className="text-red-500 text-xs">Required</span>}
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 gap-16">
            <div>
              <label className='text-black' htmlFor="email">Email Address</label>
              <input
                {...register('email', { 
                  required: true,
                  pattern: /^\S+@\S+$/i 
                })}
                type="email"
                placeholder="Type Here"
                className="w-full text-gray-600 text-sm bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none py-3 placeholder-gray-400"
              />
              {errors.email && <span className="text-red-500 text-xs">Valid email required</span>}
            </div>
            <div>
              <label className='text-black' htmlFor="phone">Phone Number</label>
              <input
                {...register('phone', { required: true })}
                type="tel"
                placeholder="Type Here"
                className="w-full text-gray-600 text-sm bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none py-3 placeholder-gray-400"
              />
              {errors.phone && <span className="text-red-500 text-xs">Required</span>}
            </div>
          </div>

         

          {/* Submit Button - Made into a small pill */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 text-white font-medium text-xs tracking-widest uppercase px-8 py-6 rounded-full border border-gray-300 transition-colors duration-200"
            >
              Get Notified
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}