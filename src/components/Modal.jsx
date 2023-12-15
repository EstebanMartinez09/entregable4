// eslint-disable-next-line react/prop-types
export const Modal = ({ showModal, register, handleSubmit, createUser, handleCloseModal, errors, editToEdit, updateUser }) => {

  const onSubmit = (user) => {
    if (editToEdit) {
      updateUser(user)
    } else {
      createUser(user)
    }

  }

  return (
    <section className={`fixed bg-[#ffffff]/60 top-0  right-0 left-0 h-screen flex items-center justify-center ${showModal ? "visible opacity-100" : "invisible opacity-0"}`}>
      <form className={` grid gap-2 w-[min(100%,_495px)] bg-[#3C3C3D] px-[74px] py-[50px]  rounded-2xl [&>label]:grid [&>label]:text-left [&>label]:font-normal [&>label]:gap-2 [&>label]:text-[#8EFF8B] [&>label>input]:bg-transparent [&>label>input]:border [&>label>input]:rounded-md [&>label>input]:px-4 [&>label>input]:py-2 [&>label>input]:text-[#E5E5E5]  [&>label>input]:outline-none `} onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-[#8EFF8B] text-3xl font-semibold">{editToEdit ? "Edit user" : "Create new user"}</h2>
        <label>
          Name
          <input {...register("first_name", { required: true })} type="text" placeholder="Enter name" autoComplete="off" />
        </label>
        <label>
          Last Name
          <input {...register("last_name", { required: true })} type="text" placeholder="Enter last name" autoComplete="off" />
        </label>
        <label>
          Email address
          <input {...register("email", { required: true })} type="email" placeholder="Enter email" autoComplete="off" />
        </label>
        <label>
          Password
          <input {...register("password", { required: true })} type="password" placeholder="Password" autoComplete="off" />
        </label>
        <label>
          Birthday
          <input {...register("birthday", { required: true })} type="date" autoComplete="off" />
        </label>

        <button type="submit" className="bg-[#CBFFDA] font-normal mt-8 text-black w-[min(100%,_347px)] py-2 rounded-lg hover:bg-[#57ec52] hover:text-white hover:tracking-widest transition-all ">{editToEdit ? "Edit user" : "Create new user"}</button>

        <button onClick={handleCloseModal} type="button" className="text-[#CBFFD9] font-normal mt-2 w-[min(100%,_347px)] py-2 rounded-lg transition-all hover:bg-[#CBFFDA] hover:text-black hover:tracking-widest ">or Cancel</button>


      </form>
    </section>
  )
}