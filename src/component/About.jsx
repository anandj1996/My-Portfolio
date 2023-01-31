import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mt-0'>
            <div className='pb-6 mt-0'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-2 '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores pariatur voluptate excepturi mollitia ratione saepe, laborum in doloremque, et magnam ipsum odit, corporis inventore eius velit autem officia qui debitis nam aliquid corrupti sequi illum blanditiis! Itaque ea, numquam suscipit laudantium consequuntur aspernatur ducimus quibusdam voluptates, assumenda in earum!
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi neque voluptatem veritatis libero omnis culpa explicabo, id, corrupti in vitae quidem nisi enim placeat quos vero voluptatum quas ad rerum cum. Sequi optio ad rem ipsum dignissimos, aut libero labore repudiandae vitae fugit aliquam a asperiores, necessitatibus ratione voluptate recusandae.
            </p>
        </div>
    </div>
  )
}

export default About