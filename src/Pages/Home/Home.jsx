import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import Loading from "../Shared/Loading";

const Home = () => {
  const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json())

  return (
    <div>
      <Banner></Banner>
      <Suspense fallback=<Loading></Loading>>
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;
