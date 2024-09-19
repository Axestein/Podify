import React from 'react'
import { Button } from "@/components/ui/button"
import { podcastData } from '@/constants'
import PodcastCard from '@/components/PodcastCard'

const Home = () => {
  return (
    <div className='mt-9 bg-black-3 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Hear what matters most to you</h1>
        <div className='podcast_grid'>
        {podcastData.map(({id, title, description, imgURL}) => (
          <PodcastCard
             key={id}
             imgUrl={imgURL}
             title={title}
             description={description}
             podcastId={id}
          />
        ))}
        </div>
      </section>
    </div>
  )
}

export default Home
