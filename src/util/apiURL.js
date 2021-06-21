const apiURL = () => {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test"
  ) {
    return "http://localhost:3001";
  }
  // return "https://aqueous-taiga-27905.herokuapp.com/transactions";
  return null
};

export default apiURL;

