import { sponsorsApi } from "./sponsorsApi";
import { Sponsor } from "./sponsorsTypes";

const getSponsor = async (): Promise<Sponsor> => {
  const { data } = await sponsorsApi.getSponsor();

  return data;
};

export const sponsorsService = {
  getSponsor,
};
