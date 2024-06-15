import { React, useEffect, useState } from 'react'
import Form from './Form.jsx'
export const BASE_URL = "http://127.0.0.1:5000/api"
import EditForm from '../components/EditForm.jsx'

const UserCards = ({ Mode, users, setUsers }) => {

    useEffect(() => {
        const getUsers = async () => {
            try {
                let res = await fetch(`${BASE_URL}/friends`,);
                let data = await res.json();
                if (!res.ok) {
                    throw new Error(res.error)
                }
                setUsers(data);

            }
            catch (e) {
                console.log("There was an error loading the users:", e);
            }
        }
        getUsers();
    }, [])


    const handelDel = async (id) => {
        try {

            let data = await fetch(`${BASE_URL}/friends/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })


            if (!data) {
                throw new Error("Couldn't delete the usser");
            }


            setUsers((prevUser) => prevUser.filter(user => user.id != id))
        }
        catch (e) {
            console.log("You got an error while deleting", e);
        }
    }


    const [edit, setEdit] = useState(null)
    return (


        <>        {users.length == 0 ?

            < div className="text-[30px] bg-gradient-to-r from-cyan-800 to-orange-600 text-center m-5">
                <h1>Lmao !! You have no friends at all</h1>
            </div>
            : null}

            <div className="lg:grid md:grid md:grid-cols-2 lg:grid-cols-3  gap-20  flex flex-col justify-center content-center items-center" >


                {
                    users.map((user, i) => {


                        return (
                            <div className="rounded-[20px] bg-slate-700 text-white flex flex-col gap-10 lg:w-[400px] sm:w-[300px] m-8 w-[300px] " key={i}>
                                <div className='flex justify-between m-5 mb-0'>
                                    <div className="flex gap-2">
                                        <img src={user.imageUrl} alt="" className='h-[50px] w-[50px]' />
                                        <div className="flex flex-col">
                                            <h2>{user.name}</h2>
                                            <h3 className='mx-2'>{user.role}</h3>
                                        </div>

                                    </div>

                                    <div className='flex gap-4'>
                                        <button className='bg-slate-500 hover:bg-slate-600 p-3 text-center text-[10px] rounded-[10px]' onClick={() => setEdit(edit === user.name ? null : user.name)}>Edt</button>
                                        {
                                            edit === user.name && (<div className='relative top-[0px] right-[-90px]'>
                                                <EditForm edit={edit} setEdit={setEdit} users={users} setUsers={setUsers} id={user.id} />

                                            </div>)

                                        }
                                        <button className='bg-slate-500 hover:bg-slate-600 p-3 text-center text-[10px] rounded-[10px]' onClick={() => handelDel(user.id)}>Del</button>
                                    </div>
                                </div>
                                <div className="mb-10 m-4">
                                    <p>{user.description}</p>
                                </div>




                            </div>

                        )
                    })
                }

            </div >
        </>

    )
}

export default UserCards
