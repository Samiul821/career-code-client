import React, { Suspense } from "react";
import ApplicationStat from "./ApplicationStat";
import ApplicationList from "./ApplicationList";
import Loading from "../Shared/Loading";
import useAuth from "../../hooks/useAuth";
import { myApplicationPromise } from "../../api/applicationApi";

const MyApplication = () => {
  const { user } = useAuth();

  return (
    <div>
      <ApplicationStat></ApplicationStat>
      <Suspense fallback=<Loading></Loading>>
        <ApplicationList
          myApplicationPromise={myApplicationPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplication;
