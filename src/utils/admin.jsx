import axios from "axios";
import {useContext} from 'react'
import { UserContext } from '../context/UserContext'

const {user} = useContex(UserContext)

export const register_user = async (values) => {

  const response = axios({
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    url: 'http://smile-sig-api.herokuapp.com/current_user/create',
    headers:{
      'Authorization': ` ${user.token}`
    },
    data:{      "user":{
      "email": values.registerEmail,
      "role": values.registerRole,
      "password": values.password
    }}
  })
  .then((res) => {
    console.log(values)
    console.log(res)
  })

  return response
}

export const remove_user = async (values) => {

  const staff = []

  const response = axios({
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    url: 'http://smile-sig-api.herokuapp.com/current_user/delete',
    headers:{
      'Authorization': ` ${user.token}`
    },
    data:{ 
      "email": values.removeEmail
    }
  })
  .then((res) => {
    user_arr = []
    console.log(res.data.message)
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/staff'
    }).then((response) => {
      const users = response.data;
      user_arr.push(users)
    })
    staff.push(user_arr)
  })

  return staff
}
