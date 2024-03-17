import Link from "next/link";

export function Modal() {
	return (
		<div className="fixed inset-0 flex items-center justify-center w-full h-full overflow-y-auto bg-gray-600 bg-opacity-50">
			<div className="p-8 bg-white border rounded-md shadow-lg w-96">
				<div className="text-center">
					<h3 className="text-2xl font-bold text-gray-900">Modal Title</h3>
					<div className="py-3 mt-2 px-7">
						<p className="text-lg text-gray-500">Modal Body</p>
					</div>
					<div className="flex justify-center mt-4">
						{/* Navigates back to the base URL - closing the modal */}
					</div>
				</div>
			</div>
		</div>
	);
}
