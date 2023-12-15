import { IconEdit, IconTrash } from '@tabler/icons-react';
export const CardUser = ({ user, handleEditUser , handleDeleteUser }) => {
    return (
        <article className='mx-auto p-4 rounded-xl border grid grid-cols-1 justify-between bg-[#a8a8a8] w-[min(100%,_650px)] sm:grid-cols-[80%_1fr]'>
            <div className='grid gap-2' >
                <header className='text-[#0F0F2D] text-3xl font-normal gap-2 overflow-hidden'>
                    <h3 className='line-clamp-1'>{user.first_name + " " + user.last_name}</h3>
                    <hr />
                </header>
                
                <main className="grid grid-cols-[1fr_1fr] place-items-start">
                    <p>Email</p>
                    <p>Birthday</p>
                    <p>{user.email}</p>
                    <p>{user.birthday}</p>
                </main>
            </div>
            <div className='flex  items-start justify-evenly'>
                <button onClick={() => handleDeleteUser(user)} className='bg-red-400 p-2 rounded-md border border-red-500' > <IconTrash size={32}/> </button>
                <button onClick={() => handleEditUser(user)} className='bg-white p-2 text-[#D3D3D3] rounded-md border border-[#D3D3D3] '> <IconEdit size={32}/> </button>
            </div>
        </article>
    )
}