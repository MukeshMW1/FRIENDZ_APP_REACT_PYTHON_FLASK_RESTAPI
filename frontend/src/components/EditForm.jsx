import React, { useState } from 'react'
export const BASE_URL = "http://127.0.0.1:5000/api"

const EditForm = ({ id, edit, setEdit, users, setUsers }) => {
    const [inputs, setInputs] = useState({
        name: "",
        role: "",
        description: "",
        gender: ""
    })

    const cancelForm = (e) => {
        e.preventDefault();
        setEdit(null);
    }

    const handleEditUser = async (e) => {
        e.preventDefault();

        if (inputs.length === 0) {
            throw new Error("Please enter the required fields")

        }

        try {

            let res = await
                fetch(`${BASE_URL}/friends/${id}`, {
                    method: "PATCH",
                    headers:
                    {
                        "Content-Type": "application/json"

                    },
                    body: JSON.stringify(inputs)
                })

            let data = await res.json();

            if (!res.ok) {
                console.log('here I got the error')
                throw new Error(data.error);
                alert(" ! OK  status")
            }

            setUsers((prevUsers) => prevUsers.map((u) => u.id === id ? data : u))

        }
        catch (err) {
            console.log("There was an error", err);
        }
        finally {
            setEdit(null);
        }
    }


    return (
        <div>
            <div>

                <form onSubmit={handleEditUser} className='w-[180px] md:w-[250px]  absolute top-[80px] right-[40px] flex flex-col gap-5 bg-gradient-to-r from-green-600 to-neutral-800  ' >
                    <h1 className='text-[20px] font-bold'>Form</h1>
                    <input type="text" placeholder="Your name" className='bg-transparent border border-black rounded-[20px] text-center outline-none m-2 p-2' value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} required />
                    <input type="text" placeholder="Your role" className='bg-transparent border border-black rounded-[20px] text-center outline-none m-2 p-2' value={inputs.role} onChange={(e) => setInputs({ ...inputs, role: e.target.value })} required />
                    <textarea name="" id="" className='bg-transparent border border-black rounded-[20px] text-center resize-none outline-none m-2 p-2 overflow-hidden' placeholder='description' value={inputs.description} onChange={(e) => setInputs({ ...inputs, description: e.target.value })} required />
                    <div className="flex gap-4 justify-center
    ">

                        <label htmlFor="female">Female</label>
                        <input id="female" type="radio" value="female" name="gender" onChange={(e) => setInputs({ ...inputs, gender: e.target.value })} required />
                        <label htmlFor="male">Male</label>
                        <input type="radio" value="male" id="male" name="gender" onChange={(e) => setInputs({ ...inputs, gender: e.target.value })} required />
                    </div>
                    <div className="flex justify-between m-2">

                        <button className='text-white bg-gradient-to-r from-green-700 to-teal-700 rounded-[10px] p-2 w-[40px] text-[10px] m-2' type='submit'>Update</button>
                        <button className='text-white bg-gradient-to-r from-green-700 text-[10px] to-teal-700 rounded-[10px] p-1 w-[40px] m-2' onClick={cancelForm}>Cancel</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditForm
