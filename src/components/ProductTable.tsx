export function ProductTable({ products, filterText, inStockOnly }: { products: Products; filterText: string; inStockOnly: boolean }) {
	let lastcategory: string | null = null;
	let row: any = [];

	products.forEach((product: Product) => {
		if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return;

		if (inStockOnly && product.stocked) return;

		if (product.category !== lastcategory) {
			row.push(<ProductCategoryRow category={product.category}></ProductCategoryRow>);
		}

		row.push(<ProductRow product={product}></ProductRow>);
		lastcategory = product.category;
	});

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{row}</tbody>
		</table>
	);
}

function ProductCategoryRow({ category }: { category: string }) {
	return (
		<tr>
			<th colSpan={2} style={{ fontWeight: "bold", fontSize: "18px" }}>
				{category}
			</th>
		</tr>
	);
}

function ProductRow({ product }: { product: Product }) {
	const name = product.stocked ? product.name : <span style={{ color: "red", fontWeight: "bold" }}>{product.name}</span>;
	return (
		<>
			<tr>
				<td>{name}</td>
				<td>{product.price}</td>
			</tr>
		</>
	);
}
