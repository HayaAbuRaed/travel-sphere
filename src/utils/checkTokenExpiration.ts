const convertExpDate = (expDate: number) => {
  return new Date(expDate * 1000);
};

const checkTokenExpiration = (expDate: number | Date) => {
  if (typeof expDate === "number") {
    expDate = convertExpDate(expDate);
  }

  const currentDate = new Date();

  return expDate < currentDate;
};

export default checkTokenExpiration;
