import { useState } from "react";
import { SearchBar, ProductTable } from "../components";

export function FilterableProductTable({ products }: { products: Products }) {
	const [filterText, setFilterText] = useState("");
	const [inStockOnly, setInStockOnly] = useState(false);

	function handleFilter(value: string) {
		setFilterText(value);
	}

	function changeInStockHandler(value: boolean) {
		setInStockOnly(value);
	}

	return (
		<div className="products">
			<SearchBar
				filterText={filterText}
				inStockOnly={inStockOnly}
				setFilterText={handleFilter}
				onChecked={changeInStockHandler}
			></SearchBar>
			<ProductTable filterText={filterText} inStockOnly={inStockOnly} products={products}></ProductTable>
		</div>
	);
}
