import { Body, Head, Html, Tailwind } from "@react-email/components";
import * as React from "react";

type Props = {
	name: string;
	email: string;
	phone?: string;
};

export const Email: React.FC<Readonly<Props>> = ({
	name,
	email,
	phone,
}: Props) => (
	<Html>
		<Head></Head>
		<Tailwind>
			<Body>
				<h1 className="text-6xl font-medium text-black-2">{`${name} wants to contact you`}</h1>
				<h3 className="text-3xl font-extralight text-black-2">{`contact details:  email: ${email} phone: ${
					phone || "No phone number entered"
				}`}</h3>
			</Body>
		</Tailwind>
	</Html>
);
