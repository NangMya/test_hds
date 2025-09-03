"use client";

import Image from "next/image";
import React from "react";
import { FaTimesCircle } from "react-icons/fa";

type ClientProps = {
  client: {
    id: number;
    name: string;
    logo: string;
  };
  onDelete: (clientId: number) => void;
};

const ClientImageCard: React.FC<ClientProps> = ({ client, onDelete }) => {
    const handleDelete = () => {
    // 2. Call the onDelete prop with the client's ID
    onDelete(client.id);
  };
  return (
    <div
      className="relative rounded group cursor-pointer p-1 border border-lg"
      key={client.id}
    >
      <button
        onClick={handleDelete}
        className="absolute top-0 right-0 text-red-500 cursor-pointer hidden group-hover:block"
      >
        <FaTimesCircle />
      </button>
      <Image
        alt={client.name}
        src={client.logo as string}
        width={100}
        height={100}
        className="w-24 h-24 object-cover"
      />
    </div>
  );
};

export default ClientImageCard;
