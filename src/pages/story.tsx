import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { StorySummary } from "views/story";

const StoryPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{"Story | Pricky Pete's Platoon"}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <StorySummary />
    </div>
  );
};

export default StoryPage;