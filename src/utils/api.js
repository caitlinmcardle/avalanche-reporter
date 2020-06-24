import axios from "axios";
const baseURL = "https://cmc-final-project.herokuapp.com/";

export const getAllReports = () => {
  return axios.get(baseURL + "avalanche-reports");
};

export const getOneReport = (report_id) => {
  return axios.get(baseURL + `avalanche-reports/${report_id}`);
};

export const getAreas = () => {
  return axios.get(baseURL + "areas");
};

export const getAreaReports = (selectedAreaId) => {
  return axios.get(baseURL + `avalanche-reports/?area.id=${selectedAreaId}`);
};
