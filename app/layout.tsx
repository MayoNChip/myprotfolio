"use client";
import React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import ThemeProvider from "../context/GlobalContext";
import "../styles/globals.css";

interface Props {
	children: React.ReactNode;
}

function layout({ children }: Props) {
	return (
		<html lang="en">
			<head />
			<body>
				<ThemeProvider>
					<div className="flex flex-col min-h-fit">
						<Navbar />
						{/* <Container> */}
						{children}
						{/* </Container> */}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}

export default layout;
