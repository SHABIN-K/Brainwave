"use client";
import React from "react";
import TimeAgo from "react-timeago";

const TimeAgoComponent = ({ createdAt }) => {
  return <TimeAgo date={createdAt} />;
};

export default TimeAgoComponent;
