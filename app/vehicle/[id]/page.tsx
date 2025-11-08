"use client";
import { useParams, useRouter } from "next/navigation";
import VehicleDetailClient from "@/components/VehicleClientDetail";
import { getVehicleById, getVehiclesByBrand } from "@/data/vehicles";
import { useMemo } from "react";

export default function VehicleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string | undefined;

  const vehicle = useMemo(() => (id ? getVehicleById(id) : undefined), [id]);

  if (!id || !vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vehicle not found</h1>
          <button
            className="inline-block rounded-md bg-primary px-4 py-2 text-white"
            onClick={() => router.push("/inventory")}
          >
            Back to inventory
          </button>
        </div>
      </div>
    );
  }

  const relatedVehicles = getVehiclesByBrand(vehicle.brand)
    .filter((v) => v.id !== vehicle.id)
    .slice(0, 3);

  // Convert any StaticImageData to a serializable string (safe for client usage)
  const toSerializable = (v: typeof vehicle) => ({
    ...v,
    image:
      typeof v.image === "object" && v.image !== null
        ? (v.image as any).src ?? ""
        : v.image,
  });

  const serializableVehicle = toSerializable(vehicle);
  const serializableRelatedVehicles = relatedVehicles.map((v) =>
    toSerializable(v)
  );

  return (
    <VehicleDetailClient
      vehicle={serializableVehicle}
      relatedVehicles={serializableRelatedVehicles}
    />
  );
}
