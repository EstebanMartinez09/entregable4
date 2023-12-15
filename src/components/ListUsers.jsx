import { CardUser } from "./CardUser"
import { NoUsers } from "./NoUsers"

export const ListUsers = ({ usersListData, handleEditUser, handleDeleteUser }) => {


  return (
    <section className="flex flex-col gap-8  justify-center w-[100%] mt-10 ">

      {usersListData?.length <= 0 && <NoUsers />}
      {usersListData?.map((user) => <CardUser key={user.id} user={user} handleEditUser={handleEditUser} handleDeleteUser={handleDeleteUser} />)}

    </section>
  )
}