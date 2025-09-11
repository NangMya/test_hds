"use client";

import CancelButton from "@/components/CancelButton";
import FormTitle from "@/components/FormTitle";
import LoadingOverlay from "@/components/LoadingOverlay";
import PrimaryButton from "@/components/PrimaryButton";
import { DepartmentProp } from "@/services/api";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const initialState = {
    name: "",
    status: 0,
};


const page = () => {
    const [department, setDepartment] = useState<DepartmentProp>(initialState);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    const { id } = useParams();

    useEffect(() => {
        const getDepartment = async () => {

            try {
                const res = await fetch(`/api/admin/department/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await res.json();
                setLoading(false)
                console.log(data);
                setDepartment(data);
            } catch (err) {
                console.error("Failed to fetch work data", err);
            }
        };

        getDepartment();
    }, [id]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("name", department.name);
        formData.append("status", department.status.toString());


        try {
            const response = await fetch(`/api/admin/department/${id}`, {
                method: "PUT",
                body: formData,
            });

            const data = await response.json();
            setLoading(false);
            if (response.ok) {
                router.push("/admin/departments");
            } else {
                setError(data.error || "Fail to create");
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <section className="py-20">
            {loading && <LoadingOverlay />}

            <div className="bg-white p-4 rounded-lg max-w-md mx-auto">
                <FormTitle title="Edit Department" />
                {error && (
                    <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg">
                        {error}
                    </div>
                )}
                <form
                    action=""
                    className="mt-6 px-6"
                    onSubmit={handleSubmit}
                >

                    <div className="mb-4">
                        <label htmlFor="name" className="text-primary text-sm">
                            Name
                        </label>
                        <input
                            type="name"
                            placeholder="Enter Department Name"
                            name="name"
                            value={department.name}
                            onChange={(e) => setDepartment({ ...department, name: e.target.value })}
                            required
                            className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="status" className="text-primary text-sm">
                            Status
                        </label>
                        <select name="status" id="status" className="w-full px-2 py-2 text-xs border border-border rounded hover:outline-none focus:outline-none" onChange={(e) => setDepartment({ ...department, status: Number(e.target.value) })}>
                            <option value="1" selected={department.status === 1}>Active</option>
                            <option value="0" selected={department.status === 0}>Inactive</option>
                        </select>
                    </div>

                    <div className="flex justify-end gap-2 mb-4">
                        <CancelButton url="/admin/departments" label="Cancel" />
                        <PrimaryButton type="submit" label="Update" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default page;
