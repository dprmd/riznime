// Svg Link
import GithubLink from "./GithubLink";
import GithubPagesLink from "./GithubPagesLink";
import ViteLink from "./ViteLink";
import ReactLink from "./ReactLink";
import TailwindLink from "./TailwindLink";
import JikanLink from "./JikanLink";

export default function About() {
  document.title = "RizNime - About";

  return (
    <>
      <div className="pl-6 py-4 text-grayWhite font-montserrat flex flex-col md:flex-row">
        <div className="min-w-[300px] max-w-[300px] order-2 md:order-1">
          <div>
            <h2 className="mb-2 mt-4 text-lg font-bold">Source</h2>
            <GithubLink />
            <GithubPagesLink />
          </div>

          <div>
            <h2 className="mb-2 mt-4 text-lg font-bold">Tech Stack</h2>
            <ViteLink />
            <ReactLink />
            <TailwindLink />
          </div>

          <div>
            <h2 className="mb-2 mt-4 text-lg font-bold">Api Reference</h2>
            <JikanLink />
          </div>
        </div>

        <div className="md:py-4 order-1 md:order-2">
          <h1 className="font-bold text-xl mb-3">
            <span className="text-slate-400 font-normal">Riz</span>
            <span className="text-slate-200 font-bold">Nime</span>
          </h1>
          <p className="leading-relaxed">
            RizNime adalah website anime yang di buat untuk mengimplementasikan
            ilmu yang saya dapatkan sembari belajar react js.
          </p>
        </div>
      </div>
    </>
  );
}
