import { ChangeEventHandler } from "react";
import { Checkbox } from "./Checkbox";

export function SearchBar({
	filterText,
	inStockOnly,
	setFilterText,
	onChecked,
}: {
	filterText: string;
	inStockOnly: boolean;
	setFilterText: CallableFunction;
	onChecked: CallableFunction;
}) {
	return (
		<div className="seach-bar">
			<input type="search" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
			<Checkbox checked={inStockOnly} onChange={onChecked}></Checkbox>
		</div>
	);
}
