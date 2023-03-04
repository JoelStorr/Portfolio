import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      sectionOne: false,

      setSectionOne: () => {
        set((state) => {
          console.log("Store Internal", state.sectionOne);
          return { sectionOne: !state.sectionOne };
        });
      },
    };
  })
);
