import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AllUsers = () => {

  useTitle('All Users')

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json()
            return data;
        }
    });

    const handleMakeStudent = id => {
      fetch(`http://localhost:5000/users/student/${id}`, {
        method: 'PUT',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        alert('Do you want to make this user a Student?')
        if(data.modifiedCount > 0 ){
          toast.success('Make Student Successful.')
          refetch();
        }
      })
    };

    const handleDeleteStudent = id => {
      fetch(`http://localhost:5000/users/student/${id}`, {
        method: 'PATCH',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        alert('Do you want to delete this Student?')
        if(data.modifiedCount > 0 ){
          toast.success('Delete Student Successful.')
          refetch();
        }
      })
    };

    return (
        <div className="overflow-x-auto w-full">
          <h3 className='text-2xl font-bold my-4'>All Users: {users.length}</h3>
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Include Student List</th>
        <th>Delete From The List</th>
      </tr>
    </thead>

    <tbody>
      {
        users.map((user, i) => <tr key={user._id} className='hover'>
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{ user?.role !== 'student' && <button onClick={() => handleMakeStudent(user._id)} className='btn btn-xs btn-accent text-white'>Make Student</button>}</td>

        <td>{ user?.role === 'student' && <button onClick={() => handleDeleteStudent(user._id)} className='btn btn-xs bg-red-600 text-white border-none'>Delete</button>}</td>
      </tr>)
      }
    </tbody>
  </table>
</div>
    );
};

export default AllUsers;