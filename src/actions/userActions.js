const URL = "http://localhost:3001/";

export const createUser = (userData) => {
  return (dispatch) => {
    const strongParams = {
      user: {
        username: userData.username,
        email: userData.email,
        password: userData.password,
        password_confirmation: userData.password_confirmation,
      },
    };
    fetch(URL + "users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(strongParams),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.errors)
          return dispatch({ type: "CREATE_USER_ERROR", errors: user.errors });
        else return dispatch({ type: "CREATE_USER", user });
      })
      .catch((errors) => {
        console.log(errors);
        dispatch({ type: "CREATE_USER_ERROR", errors });
      });
  };
};

export const destroySession = () => {
  return (dispatch) => {
    fetch(URL + "logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((logoutData) => {
        dispatch({ type: "DESTROY_SESSION", logoutData });
      });
  };
};

export const createSession = (userData) => {
  return (dispatch) => {
    const strongParams = {
      user: {
        username: userData.username,
        password: userData.password,
      },
    };
    fetch(URL + "login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(strongParams),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.errors)
          return dispatch({ type: "CREATE_USER_ERROR", errors: user.errors });
        else return dispatch({ type: "CREATE_SESSION", user });
      })
      .catch((errors) => {
        console.log(errors);
        dispatch({ type: "CREATE_SESSION_ERROR", errors });
      });
  };
};

export const checkSession = () => {
  return (dispatch) => {
    fetch(URL + "logged_in", { credentials: "same-origin" })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "CHECK_SESSION", data });
      });
  };
};
