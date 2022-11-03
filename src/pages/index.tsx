import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { SocialList } from "../components/socials";

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="sm:px-8 md:h-full">
        <div className="">
          <h1 className="headline inline-flex mt-20 text-7xl sm:text-8xl sm:text-center font-serif color-">
            howdy{" "}
            <img
              className="self-center w-16 h-16 mx-3"
              src="/static/mac.png"
            ></img>
          </h1>
          <p className="my-7 text-lg md:text-xl leading-relaxed">
            My name is{" "}
            <b className="font-sansb ease-in-out duration-300 underline bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-cyan-300 hover:brightness-200">
              Norman.
            </b>{" "}
            I enjoy creating interfaces, surfing the wide web, and listening to
            music. You can often find me in
            <span className="inline-flex items-baseline px-2 font-bold">
              <img
                src="/static/ctt.png"
                alt=""
                className="self-center w-6 h-6 rounded-full mx-1"
              />
              <Link href="https://discord.gg/5bxvUGQwrx">
                <span className="font-sansb ease-in-out duration-300 underline bg-clip-text text-transparent bg-gradient-to-br to-indigo-500 via-purple-500 from-indigo-500 hover:brightness-200">
                  Couleur&apos;s Tweak Tips
                </span>
              </Link>
            </span>
            or below.
          </p>
          <div className="text-lg text-justify">
            <SocialList />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
