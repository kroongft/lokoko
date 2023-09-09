import axiosInstance from "../common/axiosInstance";

export const getArmories = (
  characterName: string,
  key: ArmoriesKeyType | null
) => {
  let keyValue = "" as string;
  if (key) {
    keyValue = `/${key}`;
  }
  return axiosInstance.get(`/armories/characters/${characterName}${keyValue}`);
};
