import React from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';

const MyApplication = () => {
    return (
        <div>
            <ApplicationStat></ApplicationStat>
            <ApplicationList></ApplicationList>
        </div>
    );
};

export default MyApplication;