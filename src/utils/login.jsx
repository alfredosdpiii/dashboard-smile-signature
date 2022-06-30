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

  axios(options)
    .then(response => {
      return JSON.stringify(response)
    });


}
