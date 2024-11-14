import { api } from "../../service/api";
import { GetSponsorApiResponse } from "./sponsorsTypes";

const getSponsor = async (): Promise<GetSponsorApiResponse> => {
  const { data } = await api.get<GetSponsorApiResponse>("/api/sponsor");

  return data;
};

export const sponsorsApi = {
  getSponsor,
};
