import React, { Suspense } from "react";
import ApplicationStat from "./ApplicationStat";
import ApplicationList from "./ApplicationList";
import Loading from "../Shared/Loading";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationApi";

const MyApplication = () => {
  const { user } = useAuth();
  console.log("token in the context", user.accessToken);

  return (
    <div>
      <ApplicationStat></ApplicationStat>
      <Suspense fallback=<Loading></Loading>>
        <ApplicationList
          myApplicationPromise={myApplicationsPromise(user.email,user.accessToken)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplication;
