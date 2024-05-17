"use client";
import {
  File,
  ListFilter,
  KeySquare,
  DollarSign,
  Users,
  CreditCard,
  Activity,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { useState } from "react";
function DriverAnaltics() {
  const analyticsData = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Driver Performance",
      value: "+2350",
      change: "+10% from last month",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Trips",
      value: "+12,234",
      change: "+19% from last month",
      icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Active Trips",
      value: "10",
      change: "+20 since last hour",
      icon: <Activity className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  return (
    <div className="grid pb-4 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:flex-wrap">
      {analyticsData.map((item, index) => (
        <Card x-chunk={`dashboard-01-chunk-${index}`} key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">{item.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
function AddDriverForm({ onClose }) {
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    max_skill: z.string().max(10),
    experience: z.number().min(0).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(20),
    licence_number: z.string().min(10).max(20),
    licence_expiry: z.string().min(10).max(20),
    licence_issued: z.string().min(10).max(20),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      max_skill: "",
      experience: 0,
      email: "",
      phone: "",
      licence_number: "",
      licence_expiry: "",
      licence_issued: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <div className="flex flex-col gap-1 pb-4">
        <Label className="text-lg font-bold">Add Driver</Label>
        <Label className="text-sm font-light">
          Add a new driver to your Magarivi account
        </Label>
      </div>
      <ScrollArea className="h-80 p-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 flex flex-wrap"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full ">
                  <FormLabel className="text-xs">Name of Driver</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="text-xs"
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full ">
                  <FormLabel className="text-xs"> Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your-email@example.com"
                      {...field}
                      className="text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full ">
                  <FormLabel className="text-xs"> Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Phone number"
                      {...field}
                      className="text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="max_skill"
              render={({ field }) => (
                <FormItem className="w-full ">
                  <FormLabel className="text-xs">
                    Highest Certified Skill Level
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Skill level"
                      {...field}
                      className="text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem className="w-full ">
                  <FormLabel className="text-xs">
                    {" "}
                    Years of Experience
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Years of experience"
                      {...field}
                      className="text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="licence_number"
              render={({ field }) => (
                <FormItem className="w-full ">
                  <FormLabel className="text-xs">Licence Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Licence Number"
                      {...field}
                      className="text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="licence_issued"
              render={({ field }) => (
                <FormItem className="w-full ">
                  <FormLabel className="text-xs">Licence Issued</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Licence Issued"
                      {...field}
                      className="text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="licence_expiry"
              render={({ field }) => (
                <FormItem className="w-full ">
                  <FormLabel className="text-xs">Licence Expiry</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Licence Expiry"
                      {...field}
                      className="text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full text-xs">
              Submit
            </Button>
          </form>
        </Form>
      </ScrollArea>
    </div>
  );
}

export default function DriverDash() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const driverDetails = {
    verified: [
      {
        name: "Jeremy Wambugu",
        email: "jeremy@magarivi.com",
        vehicle: "Sprinter Van",
        licence: "Valid",
        trips: "Ongoing",
        revenue: "$250.00",
        avatarUrl: "https://github.com/shadcn.png",
        avatarFallback: "JW",
      },
      {
        name: "Alice Johnson",
        email: "alice@magarivi.com",
        vehicle: "Ford Transit",
        licence: "Valid",
        trips: "Completed",
        revenue: "$500.00",
        avatarUrl: "https://github.com/alice.png",
        avatarFallback: "AJ",
      },
      {
        name: "Bob Smith",
        email: "bob@magarivi.com",
        vehicle: "Mercedes Sprinter",
        licence: "Valid",
        trips: "Ongoing",
        revenue: "$300.00",
        avatarUrl: "https://github.com/bob.png",
        avatarFallback: "BS",
      },
      {
        name: "Charlie Brown",
        email: "charlie@magarivi.com",
        vehicle: "VW Transporter",
        licence: "Valid",
        trips: "Completed",
        revenue: "$400.00",
        avatarUrl: "https://github.com/charlie.png",
        avatarFallback: "CB",
      },
      {
        name: "Diana Prince",
        email: "diana@magarivi.com",
        vehicle: "Renault Master",
        licence: "Valid",
        trips: "Ongoing",
        revenue: "$350.00",
        avatarUrl: "https://github.com/diana.png",
        avatarFallback: "DP",
      },
    ],
    unverified: [
      {
        name: "John Dough",
        email: "dough@magarivi.com",
        vehicle: "Nissan Van",
        licence: "Invalid",
        trips: "Ongoing",
        revenue: "$250.00",
        avatarFallback: "JD",
      },
      {
        name: "Eve Adams",
        email: "eve@magarivi.com",
        vehicle: "Toyota Hiace",
        licence: "Invalid",
        trips: "Pending",
        revenue: "$200.00",
        avatarFallback: "EA",
      },
      {
        name: "Frank Harris",
        email: "frank@magarivi.com",
        vehicle: "Fiat Ducato",
        licence: "Invalid",
        trips: "Ongoing",
        revenue: "$180.00",
        avatarFallback: "FH",
      },
      {
        name: "Grace Lee",
        email: "grace@magarivi.com",
        vehicle: "Peugeot Boxer",
        licence: "Invalid",
        trips: "Ongoing",
        revenue: "$220.00",
        avatarFallback: "GL",
      },
      {
        name: "Henry Ford",
        email: "henry@magarivi.com",
        vehicle: "Citroen Jumper",
        licence: "Invalid",
        trips: "Pending",
        revenue: "$210.00",
        avatarFallback: "HF",
      },
    ],
  };

  function handleOnboardDriverClick() {
    setDialogOpen(true);
  }

  function handleCloseDialog() {
    setDialogOpen(false);
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogOverlay />
        <DialogContent>
          <AddDriverForm onClose={handleCloseDialog} />
        </DialogContent>
      </Dialog>

      <Button onClick={handleOnboardDriverClick} className="ml-auto mb-4 w-40">
        <KeySquare className="mr-2 h-4 w-4" /> Onboard Driver
      </Button>

      <DriverAnaltics />
      <div>
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="verified">Verified</TabsTrigger>
              <TabsTrigger value="unverified">Unverified</TabsTrigger>
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
                  <DropdownMenuCheckboxItem>On-going</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Aborted</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Export</span>
              </Button>
            </div>
          </div>
          <TabsContent value="verified">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Verified Drivers</CardTitle>
                <CardDescription>
                  Drivers with valid documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Driver</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Vehicle
                      </TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Licence
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Trips
                      </TableHead>
                      <TableHead className="text-right">Revenue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {driverDetails.verified.map((driver, index) => (
                      <TableRow key={index} className="bg-accent">
                        <TableCell className="flex items-center gap-2">
                          <div>
                            <Avatar className="hidden h-9 w-9 sm:flex">
                              <AvatarImage
                                src={driver.avatarUrl}
                                alt={driver.name}
                              />
                              <AvatarFallback>
                                {driver.avatarFallback}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div>
                            <div className="font-medium">{driver.name}</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              {driver.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          {driver.vehicle}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="secondary">
                            {driver.licence}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {driver.trips}
                        </TableCell>
                        <TableCell className="text-right">
                          {driver.revenue}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="unverified">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Unverified Drivers</CardTitle>
                <CardDescription>
                  Drivers with pending document approvals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Driver</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Vehicle
                      </TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Licence
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Trips
                      </TableHead>
                      <TableHead className="text-right">Revenue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {driverDetails.unverified
                      .filter((driver) => driver.licence === "Invalid")
                      .map((driver, index) => (
                        <TableRow key={index} className="bg-accent">
                          <TableCell className="flex items-center gap-2">
                            <div>
                              <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarFallback>
                                  {driver.avatarFallback}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <div>
                              <div className="font-medium">{driver.name}</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                {driver.email}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {driver.vehicle}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              {driver.licence}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {driver.trips}
                          </TableCell>
                          <TableCell className="text-right">
                            {driver.revenue}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="all">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>All Drivers</CardTitle>
                <CardDescription>Registered Magarivi Drivers</CardDescription>
              </CardHeader>
              <CardContent>
                <Table className="">
                  <TableHeader className="">
                    <TableRow>
                      <TableHead>Driver</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Vehicle
                      </TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Licence
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Trips
                      </TableHead>
                      <TableHead className="text-right">Revenue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {driverDetails.verified
                      .concat(driverDetails.unverified)
                      .map((driver, index) => (
                        <TableRow key={index} className="bg-accent">
                          <TableCell className="flex items-center gap-2 py-4">
                            <div>
                              <Avatar className="hidden h-9 w-9 sm:flex">
                                {driver.avatarUrl ? (
                                  <AvatarImage
                                    src={driver.avatarUrl}
                                    alt={driver.name}
                                  />
                                ) : (
                                  <AvatarFallback>
                                    {driver.avatarFallback}
                                  </AvatarFallback>
                                )}
                              </Avatar>
                            </div>
                            <div>
                              <div className="font-medium">{driver.name}</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                {driver.email}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {driver.vehicle}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              {driver.licence}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {driver.trips}
                          </TableCell>
                          <TableCell className="text-right">
                            {driver.revenue}
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
    </div>
  );
}
