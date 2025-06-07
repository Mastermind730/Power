'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInputs {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
}

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-sm p-16 w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="text-5xl flex font-light text-gray-700 mb-3">
            SAY <span className="text-green-500 font-normal ml-2">HELLO</span>
          </div>
          <p className="text-gray-400 text-xs tracking-widest uppercase leading-relaxed px-4">
            WE WOULD LOVE TO HEAR FROM YOU. DROP US A LINE AND WE&apos;LL GET BACK TO YOU.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-16">
            <div>
              <label htmlFor="first_name">First Name</label>
              <input
                {...register('field1', { required: true })}
                type="text"
                placeholder="Type Here"
                className="w-full text-gray-600 text-sm bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none py-3 placeholder-gray-400"
              />
            </div>
            <div>
                            <label htmlFor="last_name">Last Name</label>

              <input
                {...register('field2', { required: true })}
                type="text"
                placeholder="Type Here"
                className="w-full text-gray-600 text-sm bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none py-3 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 gap-16">
            <div>
                            <label htmlFor="email">Email Address</label>

              <input
                {...register('field3', { required: true })}
                type="text"
                placeholder="Type Here"
                className="w-full text-gray-600 text-sm bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none py-3 placeholder-gray-400"
              />
            </div>
            <div>
                            <label htmlFor="phone">Phone Number</label>

              <input
                {...register('field4', { required: true })}
                type="text"
                placeholder="Type Here"
                className="w-full text-gray-600 text-sm bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none py-3 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Third Row - Full Width */}
          <div>
                                        <label htmlFor="message">Mssage</label>

            <input
              {...register('field5', { required: true })}
              type="text"
              placeholder="Type Here"
              className="w-full text-gray-600 text-sm bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none py-3 placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 text-green-500 font-medium text-xs tracking-widest uppercase px-6 py-3 rounded-full border border-gray-300 transition-colors duration-200"
            >
              CONTACT US
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}