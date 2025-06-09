import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import Loading from "../Shared/Loading";

const jobsPromise = fetch("https://career-code-server-dun.vercel.app/jobs").then((res) =>
  res.json()
);


const Home = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={<Loading />}>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
