import { useState, useEffect } from "react";
import { Sponsor } from "../domain/sponsors/sponsorsTypes";
import { sponsorsService } from "../domain/sponsors/sponsors";

export function useSponsors() {
  const [sponsor, setSponsor] = useState<Sponsor>({} as Sponsor);

  const loadSponsor = async () => {
    const data = await sponsorsService.getSponsor();

    if (data) {
      setSponsor(data);
    }
  };

  useEffect(() => {
    loadSponsor();
  }, []);

  return { sponsor };
}
