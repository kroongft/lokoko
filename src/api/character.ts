import axiosInstance from "../common/axiosInstance";

export const getCharacters = (name: string) => {
  return axiosInstance.get(`/characters/${name}/siblings`);
};
