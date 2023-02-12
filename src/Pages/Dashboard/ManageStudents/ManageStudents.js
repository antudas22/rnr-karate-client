import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const ManageStudents = () => {
  useTitle('Manage Students')
  const {user, logOut} = useContext(AuthContext);

    const [deletingStudent, setDeletingStudent] = useState(null);

    const closeModal = () => {
        setDeletingStudent(null);
    }

    useEffect( () => {
      fetch(`http://localhost:5000/students?email=${user?.email}`,{
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => {
        if(res.status === 401 || res.status === 403){
          return logOut();
        }
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
    }, [user?.email, logOut])

  const { data: students, isLoading, refetch } = useQuery({
    queryKey: ['students'],
    queryFn: async () => {
      try {
        const res = await fetch('http://localhost:5000/students', {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        
      }
    },
  });

  const handleDeleteStudent = student => {
    fetch(`http://localhost:5000/students/${student._id}`, {
        method: 'DELETE',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(`Student ${student.name} deleted successfully.`)
        }
    })
}

  if(isLoading){
    return <Loading />
  }

  return (
    <div>
      <h3 className="text-2xl font-bold my-4">
        Manage Students: {students?.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            students?.map((student, i) => (
              <tr key={student._id} className="hover">
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={student.image} alt="avatar" />
                    </div>
                  </div>
                </td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>
                <label onClick={() => setDeletingStudent(student)} htmlFor="confirmation-modal" className="btn btn-xs bg-red-600">Delete</label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        deletingStudent && <ConfirmationModal
        title={`Are you sure you want to delete?`}
        message={`If you delete ${deletingStudent.name}. It cannot be undone.`}
        successAction = {handleDeleteStudent}
        successButtonName = "Delete"
        modalData = {deletingStudent}
        closeModal = {closeModal}
        >

        </ConfirmationModal>
      }
    </div>
  );
};

export default ManageStudents;
