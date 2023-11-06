// authGuard.js
export const useAuth = () => {
  const token = localStorage.getItem("token") // Get the token from local storage

  if (token) {
    return true
  } else {
    return false
  }
}
