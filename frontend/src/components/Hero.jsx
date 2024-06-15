import React from 'react'
import UserCards from './UserCards'
const Hero = ({ users, setUsers, Mode }) => {
    return (
        <div>

            <div className={`${Mode ? " text-black bg-slate-300 text-center m-4 text-[30px] bg-gradient-to-r from-green-500 to-purple-300 bg-clip-text text-transparent font-bold" : null}`}>

                <h1>Best of People</h1>
            </div>
            <UserCards users={users} setUsers={setUsers} />
        </div >
    )
}

export default Hero