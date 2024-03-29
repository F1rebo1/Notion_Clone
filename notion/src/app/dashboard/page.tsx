"use client";
import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PlusIcon } from "lucide-react";
import { UserButton } from '@clerk/nextjs';
import { Separator } from '@radix-ui/react-separator';
import CreateDialog from '@/components/ui/CreateDialog';
import { log } from 'console';
import { Dialog } from '@radix-ui/react-dialog';

type Props = {}

const DashboardPage = (props: Props) => {
    return (<>
        <div className='grainy min-h-screen'>
            <div className='max-w-7xl mx-auto p-10'>
                <div className='h-14'></div>
                <div className='flex justify-between items-center md:flex-row flex-col'>
                    <div className='flex items-center'>
                        <Link href='/'>
                            <Button className='bg-pink-500' size="sm">
                                <ArrowLeft className="mr-1 w-4 h-4" />
                                Back
                            </Button>
                        </Link>
                        <div className='w-4'></div>
                        <h1 className='text-3xl font-bold text-gray-900'>Folders</h1>
                        <div className='w-4'></div>
                        <UserButton></UserButton>
                    </div>
                </div>
                <div className="h-8"></div>
                <Separator />
                <div className="h-8"></div>
                <div className="text-center">
                    <h2 className='text-xl text-gray-600'>No folders created yet</h2>
                </div>
                <div className='grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3'>
                    {/* <Link href='/dashboard'></Link> */}
                    <CreateDialog></CreateDialog>
                </div>
            </div>
        </div>
    </>);
}

export default DashboardPage;