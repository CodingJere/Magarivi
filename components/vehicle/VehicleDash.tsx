"use client";
import { DollarSign, CreditCard, Activity, Truck } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
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
import { useState } from "react";

// Cards that display the analytics cards on the vehicle tab
function VehicleAnaltics() {
  return (
    <div className="grid pb-4 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:flex-wrap">
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>

      <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Trips</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Trips</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">10</div>
          <p className="text-xs text-muted-foreground">+20 since last hour</p>
        </CardContent>
      </Card>
    </div>
  );
}

function AddDriverForm({ onClose }) {
  const formSchema = z.object({
    registration: z.string().min(2).max(50),
    capacity: z.string().max(10),
    weight: z.number().min(0).max(50),
    make: z.string().email(),
    model: z.string().min(10).max(20),
    manufacture_date: z.string().min(10).max(20),
    insurance_no: z.number().min(10).max(20),
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
function Vehicles() {
  const vehiclesList = [
    {
      driver: "Jeremy Wambugu",
      vehicle: "Sprinter Van",
      licence: "Valid",
      trips: "Ongoing",
      revenue: "$250.00",
      email: "jeremy@magarivi.com",
      avatarURL: "https://github.com/shadcn.png",
    },
    {
      driver: "John Dough",
      vehicle: "Nissan Van",
      licence: "Invalid",
      trips: "Ongoing",
      revenue: "$250.00",
      email: "dough@magarivi.com",
      avatarURL: "",
    },
  ];
  return (
    <TableBody className="flex flex-col w-full">
      {vehiclesList.map((vehicle, index) => (
        <TableRow
          key={index}
          className=" flex justify-between items-center bg-accent px-2"
        >
          <TableCell className="flex items-center gap-2 py-4">
            <div>
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage
                  src={vehicle.avatarURL}
                  alt={`@${vehicle.driver}`}
                />
                <AvatarFallback>
                  {vehicle.driver
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
            <div>
              <div className="font-medium">{vehicle.driver}</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                {vehicle.email}
              </div>
            </div>
          </TableCell>
          <TableCell className="hidden sm:table-cell py-4">
            {vehicle.vehicle}
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            <Badge className="text-xs" variant="secondary">
              {vehicle.licence}
            </Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">
            {vehicle.trips}
          </TableCell>
          <TableCell className="text-right">{vehicle.revenue}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
export default function VehicleDash() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  function handleOnboardDriverClick() {
    setDialogOpen(true);
  }

  function handleCloseDialog() {
    setDialogOpen(false);
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogOverlay />
        <DialogContent>
          <AddDriverForm onClose={handleCloseDialog} />
        </DialogContent>
      </Dialog> */}

      <Button onClick={handleOnboardDriverClick} className="ml-auto mb-4 w-40">
        <Truck className="mr-2 h-4 w-4" /> Add Vehicle
      </Button>

      <VehicleAnaltics />
      <Vehicles />
    </div>
  );
}
