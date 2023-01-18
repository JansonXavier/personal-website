import { WindowMockUp } from "@/components/WindowMockup";

export default ({ params: { project } }: { params: { project: string } }) => {
  return (
    <main>
      <h1>{project}</h1>
      <WindowMockUp />
    </main>
  );
};
