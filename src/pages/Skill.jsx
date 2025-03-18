import React from 'react'
import { FrontendData } from '../components/FrontendData'
import { DesignData } from '../components/DesignData'
import { ProgramTool } from '../components/ProgramTool'

const Skill = () => {
  return (
    <div className='py-18 px-24'>
      <div className='my-10'>
        <h1 className='font-bold text-4xl my-6'>FrontEnd</h1>
        <div className='flex gap-10 flex-wrap'>
        {
          FrontendData?.map((item,i) => {
            return (
              <div key={i} className='flex items-center gap-1 rounded-md bg-[#d9d9d9d9] p-4'>
                <h1 className='font-bold'>{item.name}</h1>
                <item.icon className='text-3xl' />
              </div>
            )
          })
        }
        </div>
      </div>
      <div className='my-10'>
        <h1 className='font-bold text-4xl my-6'>Design Tool</h1>
        <div className='flex gap-10 flex-wrap'>
        {
          DesignData?.map((item,i) => {
            return (
              <div key={i} className='flex items-center gap-1 rounded-md bg-[#d9d9d9d9] p-4'>
                <h1 className='font-bold'>{item.name}</h1>
                <item.icon className='text-3xl' />
              </div>
            )
          })
        }
        </div>
      </div>
      <div className='my-10'>
        <h1 className='font-bold text-4xl my-6'>Programming Tool</h1>
        <div className='flex gap-10 flex-wrap'>
        {
          ProgramTool?.map((item,i) => {
            return (
              <div key={i} className='flex items-center gap-1 rounded-md bg-[#d9d9d9d9] p-4'>
                <h1 className='font-bold'>{item.name}</h1>
                <item.icon className='text-3xl'/>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Skill
