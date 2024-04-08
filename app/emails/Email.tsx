import {
  Body,
  Container,
  Heading,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
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
  <Tailwind>
    <Body>
      <Container className="flex flex-col items-center py-20">
        <Heading className="text-6xl font-medium text-black-2">
          <span className="font-semibold text-accent">{name}</span> wants to
          contact
        </Heading>

        <Section className="flex flex-col self-start pl-6 my-4 space-y-2">
          <Heading className="text-4xl font-normal underline decoration-2 decoration-dashed underline-offset-2 text-black-2">
            contact details:
          </Heading>
          <Text className="text-3xl font-extralight text-black-2">
            <span>email:</span>
            <span className="font-semibold"> {email}</span>
          </Text>
          {phone && (
            <Text className="text-3xl font-extralight text-black-2">
              <span>phone:</span> <span className="font-semibold">{phone}</span>
            </Text>
          )}
          <span>sent at {new Date().toLocaleString()}</span>
        </Section>
      </Container>
    </Body>
  </Tailwind>
);
