import React from 'react'
import myprofile from '../myprofile.png'

const Aboutme = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-20 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" style={{borderRadius:"100%"}} class="object-contain rounded-full h-full w-full" src={myprofile}/>
      </div>
      <div id="aboutme" class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 style={{fontSize:"25px"}} class="font-medium title-font mt-4 text-gray-900 text-lg">Ishwor Basyal</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p style={{fontSize:"18px", color:"black", fontWeight:"400"}} class="text-base">Hello, it's me Ishwor Basyal aka Aesthetic Bahun. This is my personal portfolio website containing most information about me. </p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">So, to tell more about me I am currently studying Bsc.CSIT 8th semester in Patan Multiple Campus. I have been involved in coding since last year and have already done a bunch of javascript and react projects.More to mention, I am willing to establish my career in web development and meet my expertise. And mainly,I prefer progression over perfection on daily basis. </p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Aboutme