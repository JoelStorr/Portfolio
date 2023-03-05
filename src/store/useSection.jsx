import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      sectionOne: false,

      setSectionOneActive: () => {
        set((state) => {
          return { sectionOne: true };
        });
      },

      setSectionOneInactive: () => {
        set((state) => {
          return { sectionOne: false };
        });
      },
    };
  })
);
