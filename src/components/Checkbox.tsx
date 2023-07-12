export function Checkbox({ checked, onChange }: { checked: boolean | undefined; onChange: CallableFunction }) {
	return (
		<div className="form-check">
			<input
				className="form-check-input"
				type="checkbox"
				id="flexCheckChecked"
				checked={checked}
				onChange={(e) => {
					onChange(e.target.checked);
				}}
			/>
			<label className="form-check-label" htmlFor="flexCheckChecked">
				Only show products in stock
			</label>
		</div>
	);
}
