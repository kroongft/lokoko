import axiosInstance from "../common/axiosInstance";

export const getCharacters = (characterName: string) => {
  return axiosInstance.get(`/characters/${characterName}/siblings`);
};
