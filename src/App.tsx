import { useStore } from "./store/store";
import { PRODUCTS_DATA } from "./lib/mockData";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { ChangeQtyButtons } from "./components/ChangeQytButtons";
import { Cart } from "./components/Cart";
import { User } from "./components/User";

function App() {
	const addProduct = useStore((state) => state.addProduct);
	const cartProducts = useStore((state) => state.products);
	return (
		<main className="space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2">
			<div className="flex justify-between">
				<User />
				<Cart />
			</div>

			<h1 className="text-2xl">Products:</h1>
			<div className="space-y-2">
				{PRODUCTS_DATA.map((product) => (
					<Card key={product.id}>
						<CardHeader>{product.title}</CardHeader>
						<CardContent>{product.price}$</CardContent>
						<CardFooter>
							{cartProducts.find((item) => item.id === product.id) ? (
								<ChangeQtyButtons productId={product.id} />
							) : (
								<Button onClick={() => addProduct(product)} variant={"default"}>
									Add to Cart
								</Button>
							)}
						</CardFooter>
					</Card>
				))}
			</div>
		</main>
	);
}

export default App;
