import { create } from "zustand";

import { Store } from "@/types/store";
import { createUserSlice } from "./userSlice";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cartSlice";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

export const useStore = create<Store>()(
	devtools(
		persist(
			subscribeWithSelector(
				immer((...a) => ({
					...createUserSlice(...a), // 显式传递 set、get 和 store
					...createCartSlice(...a), // 显式传递 set、get 和 store
				}))
			),
			{
				name: "local-storage",
			}
		)
	)
);
