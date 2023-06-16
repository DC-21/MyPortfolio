import React from 'react'
import Slide from './Slide';

const Portfolio = () => {
    return (
        <section class="text-gray-600 body-font h-[600px] overflow-hidden">
            <div class="container px-5 items-center justify-center mx-auto">
                <div class="flex flex-wrap w-full">
                    <div className='w-1/2 h-[60vh] items-start'>
                    <Slide className="w-full h-[60vh] md:items-start items-center"/>
                    </div>
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">Projects</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">The Ai Web</h1>
                            <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            </div>
                            <div class="flex">
                                <span class="title-font font-medium text-2xl text-gray-900">Visit Ai Web</span>
                                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Visit Ai</button>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
