export const ModalDelete = ({ showModalDelete, handleCloseModalDelete, deleteUser }) => {
    return (
        <section className={`fixed bg-[#ffffff]/60 top-0  right-0 left-0 h-screen flex items-center justify-center ${showModalDelete ? "visible opacity-100" : "invisible opacity-0"}`}>
            <form className="bg-[#3C3C3D] px-[74px] pt-[50px] pb-[25px]  rounded-2xl">
                <div>

                    <p className="text-[#fc545c] text-3xl font-semibold">Are you sure you want to delete this user?</p>

                </div>

                <div>

                    <button onClick={deleteUser} className="bg-[#CBFFDA] font-normal mt-8 text-black w-[min(100%,_347px)] py-2 rounded-lg hover:bg-[#fc545c] hover:text-white hover:tracking-widest transition-all ">Delete</button>

                    <button onClick={handleCloseModalDelete} type="button" className="text-[#CBFFD9] font-normal mt-2 w-[min(100%,_347px)] py-2 rounded-lg transition-all hover:bg-[#CBFFDA] hover:text-black hover:tracking-widest ">or Cancel</button>

                </div>
            </form>
        </section>
    )
}