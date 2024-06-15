import { React, useState } from 'react'
import Form from './Form'
const Navbar = ({ setUsers, Mode, setMode }) => {
    const [create, setCreate] = useState(false)

    return (
        <div className='flex gap-2 m-2 md:gap-4 justify-between items-center content-center md:m-5 bg-slate-500 rounded-[10px]'>
            <div className="flex gap-4 md:ml-10">
                <img src="/react.png" alt="" width={50} height={50} />
                <img src="/python.png" alt="" width={50} height={50} />
            </div>

            <div className="flex text-center content-center gap-2 m-2 md:gap-4 md:m-4 md:mr-10">
                <h1 className='cursor-pointer text-[25px] font-bold'>Friends</h1>
                <button className='cursor-pointer'
                    onClick={() => setMode(!Mode)}>Mode</button>
                <button className='cursor-pointer' onClick={() => setCreate(!create)}>Create</button>
                {create ? <Form setCreate={setCreate} setUsers={setUsers} />
                    : null}
            </div>



        </div >
    )
}

export default Navbar
