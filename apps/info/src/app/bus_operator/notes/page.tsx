'use client'

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button } from '@transport-task/info-components';


export default function Notes(request: { searchParams: { name: string; }; }) {
    // Data
    const name = request.searchParams.name;
    const router = useRouter();
    const [notes, setNotes] = useState<string>('');

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        localStorage.setItem(`${name}-notes`, notes);
        router.push(`/bus_operator/detail?name=${name}`);
    }

    return (
        <div className="h-screen">
            <div className="flex justify-center pt-16">
                <Form className="w-[500px]" title="Notes Form" onSubmit={submit}>
                    <div className="text-center mt-10"><Input name="notes" value={notes} placeholder="Enter Notes ..." onChange={(e) => { setNotes(e.target.value) }} /></div>
                    <div className="text-center mt-10"><Button type="submit">Submit</Button></div>
                </Form>
            </div>
        </div>
    )
}