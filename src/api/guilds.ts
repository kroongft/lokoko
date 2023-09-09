import axiosInstance from "../common/axiosInstance";

export const getGuilds = (serverName: ServerName) => {
  return axiosInstance.get(`/guilds/rankings?serverName=${serverName}`);
};
