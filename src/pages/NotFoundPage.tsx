import { Link } from "wouter";

export const NotFoundPage = () => {
  return (
    <section>
      Page not Found! Check the URL or{" "}
      <Link href="/" className={"text-blue-700 underline"}>
        go back to home page
      </Link>
    </section>
  );
};
