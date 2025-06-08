import axios from "axios";
import React from "react";
import useAuth from "./useAuth";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user, logOutUser } = useAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  // response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error);
      if (error.status === 401 || error.status === 403) {
        logOutUser()
          .then(() => {
            toast.warning("Session expired. Log in again.");
          })
          .catch((err) => {
            console.log(err);
            toast.error("Sign out failed.");
          });
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
