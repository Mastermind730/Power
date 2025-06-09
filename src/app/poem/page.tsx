"use client";
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function PurposePoem() {
  return (
    <>
      <Head>
        <title>Purpose Poem</title>
        <meta name="description" content="A poem about Paul - Purpose and remembrance" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 flex flex-col mt-10 items-center justify-center px-4 py-8">
        {/* Header */}
        <div className="relative mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] text-green-400">
            PURPOSE
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Large P */}
          <div className="text-6xl md:text-7xl font-light text-gray-400 mb-12">
            p
          </div>

          {/* Poem Content */}
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-base md:text-lg font-light">
              My brother was called Paul. My surname
            </p>
            <p className="text-base md:text-lg font-light">
              derives from Ower.
            </p>
            
            <p className="text-base md:text-lg font-light mt-8">
              Paul was a kind & loving son to my fearless, and amazing mum.
            </p>
            
            <p className="text-base md:text-lg font-light mt-10">
              Mournfully, whilst saving his friend out of a river, Paul fell in,
            </p>
            <p className="text-base md:text-lg font-light">
              and sadly passed away.
            </p>
            
            <p className="text-base md:text-lg font-light mt-10">
              My energy & Paul&apos;s memory will transcend a powerful message
            </p>
            <p className="text-base md:text-lg font-light">
              of connection, and the remembrance of one life.
            </p>
            
            <p className="text-base md:text-lg font-medium mt-12">
              This is my brother&apos;s genesis.
            </p>
          </div>

          {/* New Section */}
          <div className="mt-20 space-y-8">
            <h3 className="text-2xl md:text-3xl font-extralight text-gray-600">
              This is Paul&apos;s genesis
            </h3>
            
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/paul-image.jpg" // Replace with your actual image path
                alt="Paul"
                fill
                className="object-cover"
              />
            </div>
            
            <p className="text-2xl font-light text-gray-500">
              Paul
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}