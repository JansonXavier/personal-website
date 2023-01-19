import { WindowMockUp } from "@/components/WindowMockup";
import { FC } from "react";

type Props = { params: { project: string } };
const Project: FC<Props> = ({ params: { project } }) => {
  return (
    <main>
      <h1>{project}</h1>
      <section>
        <h2>Problem</h2>
      </section>
      <section>
        <h2>Solution</h2>
      </section>
      <WindowMockUp url="http://boost-excel.s3-website-us-east-1.amazonaws.com/" />
    </main>
  );
};

export default Project;
