"use client";
import { Copy, File, ListFilter, MoreVertical, Truck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
const fuelData = {
  thisMonth: "$1,329",
  percentageChange: "+10%",
  progressValue: 12,
  week: [
    {
      id: 1,
      vehicle: "Sprinter Van",
      ownerEmail: "jeremy@magarivi.com",
      saleType: "Sale",
      fulfillmentStatus: "Fulfilled",
      date: "2023-06-23",
      amount: "$250.00",
      ownerName: "Jeremy Wambugu",
      vehicleDetails: {
        type: "Sprinter Van",
        engineCapacity: "2000cc",
        estimatedAvgKmL: "12 Km/L",
        currentKmL: "10 Km/L",
      },
      driver: "Jeremy Wambugu",
      image: "https://example.com/image1.jpg",
    },
    {
      id: 2,
      vehicle: "Sedan",
      ownerEmail: "alex@magarivi.com",
      saleType: "Lease",
      fulfillmentStatus: "Pending",
      date: "2023-06-20",
      amount: "$150.00",
      ownerName: "Alex Smith",
      vehicleDetails: {
        type: "Sedan",
        engineCapacity: "1600cc",
        estimatedAvgKmL: "15 Km/L",
        currentKmL: "14 Km/L",
      },
      driver: "Alex Smith",
      image: "https://example.com/image2.jpg",
    },
    {
      id: 3,
      vehicle: "SUV",
      ownerEmail: "maria@magarivi.com",
      saleType: "Purchase",
      fulfillmentStatus: "Fulfilled",
      date: "2023-06-18",
      amount: "$350.00",
      ownerName: "Maria Garcia",
      vehicleDetails: {
        type: "SUV",
        engineCapacity: "2500cc",
        estimatedAvgKmL: "10 Km/L",
        currentKmL: "9 Km/L",
      },
      driver: "Maria Garcia",
      image: "https://example.com/image3.jpg",
    },
    {
      id: 4,
      vehicle: "Hatchback",
      ownerEmail: "john@magarivi.com",
      saleType: "Rent",
      fulfillmentStatus: "Fulfilled",
      date: "2023-06-15",
      amount: "$100.00",
      ownerName: "John Doe",
      vehicleDetails: {
        type: "Hatchback",
        engineCapacity: "1400cc",
        estimatedAvgKmL: "18 Km/L",
        currentKmL: "16 Km/L",
      },
      driver: "John Doe",
      image: "https://example.com/image4.jpg",
    },
    {
      id: 5,
      vehicle: "Truck",
      ownerEmail: "karen@magarivi.com",
      saleType: "Sale",
      fulfillmentStatus: "Fulfilled",
      date: "2023-06-10",
      amount: "$500.00",
      ownerName: "Karen Johnson",
      vehicleDetails: {
        type: "Truck",
        engineCapacity: "3000cc",
        estimatedAvgKmL: "8 Km/L",
        currentKmL: "7 Km/L",
      },
      driver: "Karen Johnson",
      image: "https://example.com/image5.jpg",
    },
    {
      id: 6,
      vehicle: "Convertible",
      ownerEmail: "lucas@magarivi.com",
      saleType: "Lease",
      fulfillmentStatus: "Pending",
      date: "2023-06-05",
      amount: "$200.00",
      ownerName: "Lucas Brown",
      vehicleDetails: {
        type: "Convertible",
        engineCapacity: "1800cc",
        estimatedAvgKmL: "14 Km/L",
        currentKmL: "13 Km/L",
      },
      driver: "Lucas Brown",
      image: "https://example.com/image6.jpg",
    },
  ],
};

const orders = [
  {
    id: 1,
    items: [
      { name: "Glimmer Lamps", quantity: 2, price: "$250.00" },
      { name: "Aqua Filters", quantity: 1, price: "$49.00" },
    ],
    tax: "$30.00",
    total: "$349.00",
    driver: "Jeremy Wambugu",
    image: "https://example.com/image1.jpg",
    vehicleDetails: {
      type: "Sprinter Van",
      engineCapacity: "2000cc",
      estimatedAvgKmL: "12 Km/L",
      currentKmL: "10 Km/L",
    },
  },
  {
    id: 2,
    items: [
      { name: "Oil Filter", quantity: 3, price: "$45.00" },
      { name: "Air Filter", quantity: 2, price: "$20.00" },
    ],
    tax: "$10.00",
    total: "$75.00",
    driver: "Alex Smith",
    image: "https://example.com/image2.jpg",
    vehicleDetails: {
      type: "Sedan",
      engineCapacity: "1600cc",
      estimatedAvgKmL: "15 Km/L",
      currentKmL: "14 Km/L",
    },
  },
  {
    id: 3,
    items: [
      { name: "Brake Pads", quantity: 4, price: "$100.00" },
      { name: "Windshield Wipers", quantity: 2, price: "$40.00" },
    ],
    tax: "$25.00",
    total: "$165.00",
    driver: "Maria Garcia",
    image: "https://example.com/image3.jpg",
    vehicleDetails: {
      type: "SUV",
      engineCapacity: "2500cc",
      estimatedAvgKmL: "10 Km/L",
      currentKmL: "9 Km/L",
    },
  },
  {
    id: 4,
    items: [
      { name: "Tire", quantity: 4, price: "$60.00" },
      { name: "Battery", quantity: 1, price: "$30.00" },
    ],
    tax: "$5.00",
    total: "$95.00",
    driver: "John Doe",
    image: "https://example.com/image4.jpg",
    vehicleDetails: {
      type: "Hatchback",
      engineCapacity: "1400cc",
      estimatedAvgKmL: "18 Km/L",
      currentKmL: "16 Km/L",
    },
  },
  {
    id: 5,
    items: [
      { name: "Engine Oil", quantity: 5, price: "$75.00" },
      { name: "Coolant", quantity: 3, price: "$45.00" },
    ],
    tax: "$15.00",
    total: "$135.00",
    driver: "Karen Johnson",
    image: "https://example.com/image5.jpg",
    vehicleDetails: {
      type: "Truck",
      engineCapacity: "3000cc",
      estimatedAvgKmL: "8 Km/L",
      currentKmL: "7 Km/L",
    },
  },
  {
    id: 6,
    items: [
      { name: "Suspension", quantity: 2, price: "$100.00" },
      { name: "Spark Plug", quantity: 4, price: "$40.00" },
    ],
    tax: "$20.00",
    total: "$160.00",
    driver: "Lucas Brown",
    image: "https://example.com/image6.jpg",
    vehicleDetails: {
      type: "Convertible",
      engineCapacity: "1800cc",
      estimatedAvgKmL: "14 Km/L",
      currentKmL: "13 Km/L",
    },
  },
];

const TripCard = () => {
  return (
    <>
      <div className="side-card md:col-span-2">
        <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Order 1234
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy Order ID</span>
                </Button>
              </CardTitle>
              <CardDescription>
                Date: {new Date().toLocaleDateString()}
              </CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <Truck className="h-3.5 w-3.5" />
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  Track Order
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    <MoreVertical className="h-3.5 w-3.5" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Export</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Trash</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>

          <CardContent className="p-6 text-sm">
            <div className="grid gap-4">
              <ul className="grid gap-4 pb-4">
                <li className="flex items-center justify-between">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="morty"
                    />
                    JW
                  </Avatar>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Name</span>
                  <span>Jeremy Wambugu</span>
                </li>
              </ul>
            </div>
            <div className="font-semibold pb-4">Vehicle Details</div>
            <ul className="grid gap-3 pb-2">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Type</span>
                <span>KBX 292J</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Engine Capacity</span>
                <span>2000cc</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Estimated Avg. Km/L
                </span>
                <span>Sprinter Van</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Current Km/L</span>
                <span>10km/l</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default function FuelDashboard() {
  const [sideCardVisible, setSideCardVisible] = useState(false);

  const handleRowClick = () => {
    setSideCardVisible(true);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-1">
        <main className="grid flex-1 items-start  md:gap-2 lg:grid-cols-6 xl:grid-cols-4">
          <div className="main-table grid auto-rows-max items-start gap-4 md:gap-4 lg:col-span-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-4">
              <Card x-chunk="dashboard-05-chunk-2" className="col-span-2">
                <CardHeader className="pb-2">
                  <CardDescription>Fuel This Month</CardDescription>
                  <CardTitle className="text-4xl">
                    {fuelData.thisMonth}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    {fuelData.percentageChange} from last month
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress
                    value={fuelData.progressValue}
                    aria-label="12% increase"
                  />
                </CardFooter>
              </Card>
            </div>
            <Tabs defaultValue="week">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 gap-1 text-sm"
                      >
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Fulfilled
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Declined
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Refunded
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 gap-1 text-sm"
                  >
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button>
                </div>
              </div>
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Fuel</CardTitle>
                    <CardDescription>Recent fuel transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Vehicle</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Engine CC
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Avg. Distance
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {fuelData.week.map((entry, index) => (
                          <TableRow
                            key={index}
                            className="bg-accent"
                            onClick={handleRowClick}
                          >
                            <TableCell>
                              <div className="font-medium">{entry.vehicle}</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                {entry.ownerEmail}
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {entry.vehicleDetails.engineCapacity}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                {entry.fulfillmentStatus}
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {entry.date}
                            </TableCell>
                            <TableCell className="text-right">
                              {entry.amount}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          {sideCardVisible && <TripCard />}
        </main>
      </div>
    </div>
  );
}
