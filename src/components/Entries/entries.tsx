import { Mic, ToggleLeft } from 'lucide-react';
import React from 'react'

function Entries() {
  return (
    <section className='flex justify-center'>
      <div>
        <div className='flex justify-between'>
            <h1 className='font-bold text-gray-900'>New entry</h1>
            <div className='flex'>
                <p className='mr-1'>Private</p>
                <ToggleLeft />
            </div>
            
        </div>
        
        <form>
            <div className='flex space-x-4'>
                <div>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-3 py-2 mt-1 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                        placeholder="What is on you mind?"
                    ></textarea>
                    <div className='flex justify-between mt-2'>
                        <Mic size={30}/>
                        <button className='py-2 px-4 rounded-md font-normal bg-blue-400 text-gray-100 hover:bg-blue-600'>
                            Save
                        </button>
                    </div>
                    
                </div>
            </div>
        </form>
      </div>
    </section>
  )
}

export default Entries;
