export type Sponsor = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type GetSponsorApiResponse = {
  data: Sponsor;
};
