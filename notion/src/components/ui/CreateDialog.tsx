'use client'
import React from 'react';
import { Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle } from '@/components/ui/dialog';

type Props = {}

const CreateDialog = (props : Props) => {
    return(
        <Dialog>
            <DialogTrigger>
                <div className='border-dashed border-2 flex border-pink-800 h-full rounded lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4'>
                    <Plus className='w-6 h-6 text-pink-600' strokeWidth={2} />
                    <h2 className='font-semibold text-pink-600 sm:mt-2'>
                        Add Folder
                    </h2>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader >
                    <DialogTitle>
                    Popup Title
                    </DialogTitle>
                </DialogHeader>
                Description!
            </DialogContent>
        </Dialog>
    );
}

export default CreateDialog;