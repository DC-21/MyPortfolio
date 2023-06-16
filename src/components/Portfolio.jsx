import React from 'react';
import Slide from './Slide';

const Portfolio = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 items-center justify-center mx-auto mt-14 py-10">
                <div className="flex flex-wrap w-full bg-black">
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 h-[80vh]">
                        <article class="card">
                            <div class="temporary_text">
                                Place image here
                            </div>
                            <div class="card_content">
                                <span class="card_title">Ai Web</span>
                                <span class="card_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
                                <p class="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>

                            </div>
                        </article>
                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Projects</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Ai Web</h1>
                        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">Visit Ai Web</span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Visit Ai</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
