"use client";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen mt-10 bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight"
          >
            <span className="text-gray-900">Get in </span>
            <span className="text-green-600">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-lg text-gray-600"
          >
            Have questions or want to discuss a project? Reach out to us directly.
          </motion.p>
        </div>

        {submitSuccess ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-green-50 border border-green-200 rounded-lg p-6"
          >
            <div className="flex justify-start">
              <motion.svg 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="h-12 w-12 text-green-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </motion.svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-green-800">Message Sent Successfully!</h3>
            <p className="mt-2 text-sm text-green-600">We&apos;ve received your inquiry and will respond within 24 hours.</p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSubmitSuccess(false)}
              className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Send another message
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
              <motion.div variants={itemVariants}>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative">
                  <input
                    id="firstName"
                    {...register("firstName", { required: "First name is required" })}
                    className={`py-3 px-4 text-black block w-full shadow-sm rounded-md border ${
                      errors.firstName 
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-green-500 focus:border-green-500'
                    }`}
                  />
                  {errors.firstName && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600 absolute"
                    >
                      {errors.firstName.message}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative">
                  <input
                    id="lastName"
                    {...register("lastName", { required: "Last name is required" })}
                    className={`py-3 px-4 text-black block w-full shadow-sm rounded-md border ${
                      errors.lastName 
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-green-500 focus:border-green-500'
                    }`}
                  />
                  {errors.lastName && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600 absolute"
                    >
                      {errors.lastName.message}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative">
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`py-3 px-4 text-black block w-full shadow-sm rounded-md border ${
                      errors.email 
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-green-500 focus:border-green-500'
                    }`}
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600 absolute"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <div className="mt-1 relative">
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone", {
                      pattern: {
                        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                        message: "Invalid phone number"
                      }
                    })}
                    className={`py-3 px-4 text-black block w-full shadow-sm rounded-md border ${
                      errors.phone 
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-green-500 focus:border-green-500'
                    }`}
                  />
                  {errors.phone && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600 absolute"
                    >
                      {errors.phone.message}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative">
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { 
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters"
                    }
                  })}
                  className={`py-3 px-4 text-black block w-full shadow-sm rounded-md border ${
                    errors.message 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-green-500 focus:border-green-500'
                  }`}
                />
                {errors.message && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-600 absolute"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;