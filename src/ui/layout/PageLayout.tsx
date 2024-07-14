import { PropsWithChildren } from "react";

interface Props {
  title: string;
}

export const PageLayout = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      <article>{children}</article>
    </section>
  );
};
