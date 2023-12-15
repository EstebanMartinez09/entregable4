import axios from "axios";
import { useEffect, useState } from "react";
import { ListUsers } from "./components/ListUsers";
import { useForm } from "react-hook-form";
import { Modal } from "./components/Modal";
import { ModalDelete } from "./components/ModalDelete";

const BASE_URL = 'https://users-crud.academlo.tech/users/';
function App() {

  const [usersListData, setUsersListData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [editToEdit, setEditToEdit] = useState(null)
  const [deletingUser, setDeletingUser] = useState(false)


  const {
    register,
    handleSubmit,
    reset,
    formState:
    { errors }
  } = useForm()

  const handleEditUser = (user) => {
    setEditToEdit(user)
    setShowModal(true)
  }

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModalDelete = () => {
    setShowModalDelete(false)
    setDeletingUser(null)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setEditToEdit(null)
    reset({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: '',
    })
  }

  const handleDeleteUser = (user) => {
    setDeletingUser(user)
    setShowModalDelete(true)
  }

  const createUser = (newUser) => {
    axios
      .post(BASE_URL, newUser)
      .then(({ data }) => {
        setUsersListData([...usersListData, data])
        handleCloseModal()
      })
      .catch((error) => console.log(error))
  }

  const updateUser = (user) => {
    axios
      .patch(`${BASE_URL}${user.id}/`, user)
      .then(({ data }) => {
        setUsersListData(usersListData.map((user) => user.id === data.id ? data : user))
        handleCloseModal()
      })
      .catch((error) => console.log(error))
  }

  const deleteUser = (e) => {
    e.preventDefault()
    axios
      .delete(`${BASE_URL}${deletingUser.id}/`)
      .then(() => {
        setUsersListData(usersListData.filter((user) => user.id !== deletingUser.id))
        handleCloseModalDelete()
      })
      .catch((error) => {
        console.log(error)
        console.log('error')
      })
  }

  useEffect(() => {
    if (editToEdit) {
      reset(editToEdit)
    }
  }, [editToEdit])

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then(({ data }) => setUsersListData(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <main className="w-[100%] min-h-screen text-center font-bold">

      <header>

        <h1 className="text-[#8EFF8B] mt-16">List of User</h1>

        <button onClick={handleOpenModal} className="bg-[#CBFFDA] font-normal mt-8 text-black w-[min(100%,_347px)] py-2 rounded-lg  hover:bg-[#57ec52] hover:text-white hover:tracking-widest transition-all">
          Create new user
        </button>

      </header>

      <ModalDelete
        showModalDelete={showModalDelete}
        handleCloseModalDelete={handleCloseModalDelete}
        deleteUser={deleteUser} />

      <Modal
        handleCloseModal={handleCloseModal}
        createUser={createUser}
        showModal={showModal}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        editToEdit={editToEdit}
        updateUser={updateUser} />

      <ListUsers
        handleEditUser={handleEditUser}
        usersListData={usersListData}
        handleDeleteUser={handleDeleteUser} />

    </main>
  )
}

export default App
