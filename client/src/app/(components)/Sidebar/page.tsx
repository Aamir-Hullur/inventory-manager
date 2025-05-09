"use client";

import { Menu, Sun } from "lucide-react";
import React from "react";

const Sidebar = () => {
	return (
		<div>
			<div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
				<div>Logo</div>
				<h1 className="font-extrabold text-2xl">ShelfSync</h1>
				<button
					className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:cursor-pointer"
					onClick={() => {}}
				>
					<Menu className="w-4 h-4" />
				</button>
			</div>
			{/* LINKS */}
			<div className="flex-grow mt-8"></div>
			Footer
			<div>
				<p className="text-center text-xs text-gray-500">
					&copy; 2025 ShelfSync
				</p>
			</div>
		</div>
	);
};

export default Sidebar;
