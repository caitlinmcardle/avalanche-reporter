import axios from "axios";
const baseURL = "https://cmc-final-project.herokuapp.com/";

export const getAllReports = () => {
  return axios.get(baseURL + "avalanche-reports");
};

export const getOneReport = (report_id) => {
  return axios.get(baseURL + `avalanche-reports/${report_id}`);
};
