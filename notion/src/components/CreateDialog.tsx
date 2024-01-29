'use client'
import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Axis3DIcon, Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useMutation } from '@tanstack/react-query';
import { generateImagePrompt } from '@/lib/openai';
import axios from 'axios';

type Props = {}

const CreateDialog = (props : Props) => {
    const [input, setInput] = React.useState('');
    const createNotebook = useMutation({
        mutationFn: async() => {
            const response = await axios.post('/api/createNotebook', {
                name: input
            });
            return response.data;
        }
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault;
    }

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
                    <DialogTitle>Popup Title</DialogTitle>
                    <DialogDescription>
                        Description!
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <Input value={input} onChange={e => setInput(e.target.value)} placeholder="Name..." />
                    <div className="h-4"></div>
                    <div className="flex items-center gap-2">
                        <Button type="submit" className='bg-lime-300 hover:shadow-sm transition hover:-translate-y-1 hover:bg-teal-700' variant="secondary">
                            Submit
                        </Button>
                        <Button type="reset" className='bg-pink-200 hover:shadow-sm transition hover:-translate-y-1 hover:bg-red-600' variant="secondary">
                            Cancel
                        </Button>
                    </div>
                </form>
                {/* <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button className='bg-pink-200 hover:shadow-sm transition hover:-translate-y-1 hover:bg-red-600' type="button" variant="secondary">
                        Cancel
                        </Button>
                    </DialogClose>
                </DialogFooter> */}
            </DialogContent>
            
        </Dialog>
    );
}

export default CreateDialog;