"use client"; 

import LoadingOverlay from "@/components/LoadingOverlay";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import usePaginationSearch from "@/hook/usePaginationSearch";
import { confirmDialog, errorAlert, successAlert } from "@/lib/swalUtils";
import { ContactProp } from "@/services/api";
import { useRouter } from "next/navigation"; 
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

type MessageProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
  updated_at: string;
};

const Page = () => {
  const router = useRouter();
  const [contacts, setContacts] = useState<MessageProps[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true); 
  const { search, setSearch, page, setPage, totalPages, currentData} = usePaginationSearch({data: contacts, pageSize:10,searchField: "name"})

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch("/api/admin/contact");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        console.error(err); 
        setError("Failed to fetch messages");
      } finally {
        setLoading(false); 
      }
    };

    fetchContact();
  }, []);

   const handleDelete = async (id: number) => {
      const confirmed = await confirmDialog();
  
      if (!confirmed) return;
  
      try {
        setLoading(true);
        const res = await fetch(`/api/admin/contact/${id}`, {
          method: "DELETE",
        });
  
        const data = await res.json();
  
        if (res.ok) {
          successAlert("Item deleted successfully.");
          setContacts((prev) =>
            prev.filter((contact) => contact.id !== id)
          );
        } else {
          errorAlert(data.error || "Delete failed.");
        }
        setLoading(false);
      } catch (error) {
        console.error("Delete failed:", error);
        errorAlert("Something went wrong");
      }
    };

  return (
    <section className="py-20">
         <div className="bg-white shadow rounded-lg p-6 w-full mx-auto mainDiv">
           {loading && <LoadingOverlay />}
           {error && <p className="text-red-500">{error}</p>}
   
           <div className="flex py-2 justify-end">
             <SearchInput value={search} onChange={setSearch} placeholder="Search by name..."/>
           </div>
   
           <div className="overflow-x-auto w-full tableDiv">
             <table className="min-w-full">
               <thead className="bg-dashboardBg text-secondaryBg py-2 text-xs font-lora w-full">
                 <tr className="whitespace-nowrap">
                   <th className="px-4 py-2 text-xs font-lora text-left">Name</th>
                   <th className="px-4 py-2 text-xs font-lora text-left">Email</th>
                   <th className="px-4 py-2 text-xs font-lora text-left">Phone</th>
                   <th className="px-4 py-2 text-xs font-lora text-left">Message</th>
                   <th className="px-4 py-2 text-xs font-lora">Action</th>
                 </tr>
               </thead>
               <tbody className="text-xs">
                 {currentData.map((contact: ContactProp) => (
                   <tr
                     key={contact.id}
                     className="whitespace-nowrap border-b border-border"
                   >
                     <td className="px-4 py-3 text-xs font-lora">
                       {contact.name}
                     </td>
                     <td className="px-4 py-3 text-xs font-lora">
                       {contact.email}
                     </td>
                     <td className="px-4 py-3 text-xs font-lora">
                       {contact.phone}
                     </td>
   
                     <td className="px-4 py-3 text-xs font-lora">
                       {contact.message.length > 35
                      ? contact.message.substring(0, 35) + "..."
                      : contact.message}
                     </td>
                     <td className="px-4 py-3 text-xs font-lora">
                       <div className="flex justify-center gap-x-4">
                        
                         <button
                           onClick={() => handleDelete(Number(contact?.id))}
                           className="text-red-500  hover:text-red-600"
                         >
                           <FaTrash size={20} />
                         </button>
                       </div>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           <Pagination page={page} totalPages={totalPages} setPage={setPage}/>
         </div>
       </section>
  );
};

export default Page;
