import Shell from "@/components/shell/Shell";
import Chapter1 from "@/components/sections/Chapter1";
import Chapter2 from "@/components/sections/Chapter2";
import Chapter3 from "@/components/sections/Chapter3";
import Chapter4 from "@/components/sections/Chapter4";
import { Chapter5, Chapter6 } from "@/components/sections/Chapter5and6";

export default function Page() {
  return (
    <Shell>
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
      <Chapter5 />
      <Chapter6 />
    </Shell>
  );
}
