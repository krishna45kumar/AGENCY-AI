import React from 'react'
import assets from '../assets/assets' 
import Title from './Title'

const Services = () => {

    const Services = () => {

        const servicesData = [
            {
                title : 'Advertising',
                description :'We turn bold ideas into powerful digital solution that connext, engage...',
                icons: assets.add_icon
            },
            {
                title :'Content marketing',
                description :'We help you excute your plan and deliver result.',
                icons: assets.marketing_icons
            },
            {
                title :'Contect writing',
                description :'We help you create a marketing strategy that drives result.',
                icons: assets.content_icon,
            },
            {
                title :'Social media',
                description :'We help you bulid strong media presence and engage with your audience.',
                icons: assets.social_icon,
            },
          
        ]


    }
  return (
    <div id='services' className ='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

        <Title title = 'How can we help?' desc ='From strategy to execution , we craft digital solution that movw your business forwad.'/>
      
    </div>
  )
}

export default Services
