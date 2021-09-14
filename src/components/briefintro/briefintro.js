import React from 'react'

const briefintro = () => {
    return (
        <section className="px-5 lg:px-28 flex">
            <div className="my-48 grid grid-cols-1 lg:grid-cols-12 gap-y-3">
                <h1 className="text-3xl font-bold lg:col-start-3 lg:col-span-8 text-center">You can call me <span className="text-secondary">Sharif</span>. It's a pleasure to meet you 😎</h1>
                <p className="lg:col-start-3 lg:col-span-8 text-justify text-lg">
                    I have been a <strong className="font-bold">software developer</strong> for almost <strong className="font-bold">3 years</strong> now. 
                    I am very interested in <strong className="font-bold">web design</strong> and also <strong className="font-bold">teaching people 
                    how to code</strong> on the internet. I always loved to learn <strong className="font-bold">new tech</strong> and using it 
                    in one of my projects.
                </p>
            </div>
        </section>
    )
}

export default briefintro
