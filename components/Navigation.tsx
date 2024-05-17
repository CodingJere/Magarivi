import Link from "next/link";
import {
  Home,
  Wrench,
  Car,
  Fuel,
  File,
  UserRound,
  Truck,
  LineChart,
  Package,
  ShoppingCart,
  Users,
  Construction,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function Navigation() {
  return (
    <>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            Vehicle Management
          </Link>

          <div className="pl-4">
            <Link
              href="/management/vehicle"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Truck className="h-4 w-4" />
              Vehicle
            </Link>
            <Link
              href="/management/vehicle/fuel"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Fuel className="h-4 w-4" />
              Fuel
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary disabled:opacity-50 cursor-not-allowed"
            >
              <Wrench className="h-4 w-4" />
              Service
              <Construction className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary disabled:opacity-50 cursor-not-allowed"
            >
              <File className="h-4 w-4" />
              Documents
              <Construction className="h-4 w-4" />
            </Link>
          </div>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            Driver Management
          </Link>
          <div className="pl-4">
            <Link
              href="/management/driver/drivers"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <UserRound className="h-4 w-4" />
              Drivers
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
