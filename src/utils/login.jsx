import axios from 'axios'

export const login = async (values) => {
  //           axios({
  //           method: 'post',
  //           headers: { 'Content-Type': 'application/json' },
  //           url: 'http://localhost:3001/login',
  //           data:{"user":{
  //             "email": values.email,
  //             "password": values.password
  //             }
  //           }
  //         })
  //         .then((res) => {
  //             setUser(res)
  //             console.log(values)
  //             console.log(res)
  //           })
  //         .catch((error) => {
  //           if (error) {
  //             setFormError(true)
  //           }
  //         })
  //       }
  // }
  const options = {
    url: 'http://localhost:3001/login',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      "user": {
        "email": values.email,
        "password": values.password
      }
    }
  };
  const user = axios(options)
    .then(response => {
      // console.log(response.headers)
      // console.log(response.data.data)
      // console.log(user)
      // let stringy = JSON.stringify(user)
      const userData = {
        id: response.data.data.id,
        email: response.data.data.email,
        token: response.headers.authorization
      }

      return userData
    });
  return user


}
