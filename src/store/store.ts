import { create } from "zustand";

import { Store } from "@/types/store";
import { createUserSlice } from "./userSlice";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cartSlice";
import { devtools, subscribeWithSelector } from "zustand/middleware";

export const useStore = create<Store>()(
	devtools(
		subscribeWithSelector(
			immer((...a) => ({
				...createUserSlice(...a), // 显式传递 set、get 和 store
				...createCartSlice(...a), // 显式传递 set、get 和 store
			}))
		)
	)
);
