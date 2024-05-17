"use client";

import AnalyticsTable from "@/components/analytics/AnalyticsTable";
import LineGraph from "@/components/analytics/LineGraph";
import PieChart from "@/components/analytics/PieChart";
import { driverData, vehicleData } from "@/lib/piechartdata";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <AnalyticsTable />
    </div>
  );
}
