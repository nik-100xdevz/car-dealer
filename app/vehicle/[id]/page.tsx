import { notFound } from "next/navigation";
import VehicleDetailClient from "@/components/VehicleClientDetail";
import { getVehicleById, getVehiclesByBrand, vehicles } from "@/data/vehicles";

// Generate static params so all vehicle pages are prerendered at build time.
export async function generateStaticParams() {
  return vehicles.map((v) => ({ id: v.id }));
}

export default function VehicleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const vehicle = getVehicleById(params.id);

  if (!vehicle) {
    // Let Next.js render the not-found page at build/runtime if id is invalid
    notFound();
  }

  const relatedVehicles = getVehiclesByBrand(vehicle.brand)
    .filter((v) => v.id !== vehicle.id)
    .slice(0, 3);

  return (
    <VehicleDetailClient vehicle={vehicle} relatedVehicles={relatedVehicles} />
  );
}
