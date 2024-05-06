'use client'
import { useState, useEffect } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Table, Tag, Link } from '@transport-task/info-components';
import { getOperators, Operator } from '../../api/operator/operator';

// -- Query --
function useQueryOperators() {
    const query = useSuspenseQuery({
        queryKey: ['Operators'],
        queryFn: async () => {
            const res = await getOperators();
            return res;
        }
    });
    return [query.data, query] as const
}

export default function OperatorTable({ name }: { name: string }) {
    const [data] = useQueryOperators();
    const operator: Operator | undefined = Array.isArray(data?.data) ? data?.data.find((o) => o.name === name) : undefined;
    const [storage, setStorage] = useState<string | null>(null);
    // const localParmas = typeof window !== 'undefined' ? localStorage.getItem(`${name}-notes`) : null;

    useEffect(() => {
        const localParmas = typeof window !== 'undefined' ? localStorage.getItem(`${name}-notes`) : null;
        if (localParmas) {
            setStorage(localParmas);
        }
    }, [])

    return (
        <div>
            <div className="text-center"><h2 className="pt-4 text-xl md:text-2xl font-bold">{`${operator?.name} - ${operator?.date}`}</h2></div>
            <div className="flex-row flex items-center px-6 py-4">
                <label className="mr-3 text-rose-500 font-bold">Notes:</label>
                {
                    storage ? <div><p className="text-sm text-neutral-500">{storage}</p></div> : <Link href={`/bus_operator/notes?name=${operator?.name}`}>Submit Notes</Link>
                }
            </div>
            <div className="mt-4 px-6">
                <Table data={operator?.routes?.map((item) => {
                    const routes = item?.routeVariant?.split(' ');

                    let tagItem;
                    if (item.deviationFromTimetable !== null && item.deviationFromTimetable !== undefined && item.deviationFromTimetable === 0) {
                        tagItem = <Tag text="On Time" color="status-ontime" />
                    } else if (item.deviationFromTimetable && item.deviationFromTimetable > 0) {
                        tagItem = <Tag text="Late" color="status-late" />
                    } else if (item.deviationFromTimetable && item.deviationFromTimetable < 0) {
                        tagItem = <Tag text="Early" color="status-early" />
                    } else {
                        tagItem = <Tag text="Unknown" color="status-unknown" />
                    }

                    return {
                        'Bus Id': item.id,
                        'Route Variant': item.routeVariant === 'UNKNOWN' ? <span>UNKNOWN</span> : <span><strong>{routes[0]}</strong><span>{` ${routes[1]} ${routes[2]}`}</span></span>,
                        'Status': tagItem
                    }
                })} />
            </div>
        </div>
    )
}