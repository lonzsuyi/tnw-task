'use client'
import { useSuspenseQuery } from '@tanstack/react-query';
import moment from 'moment';
import { Card } from '@transport-task/info-components';
import { getOperators } from '../api/operator/operator';

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

export default function OperatorList() {
    const [data] = useQueryOperators();
    const operators = Array.isArray(data?.data) ? data?.data : [];

    return <div className="mt-10 px-6 md:grid md:grid-cols-3 md:gap-3">
        {
            operators.sort((a, b) => moment(String(a.date), 'DD/MM/YYYY').unix() < moment(String(b.date), 'DD/MM/YYYY').unix() ? 1 : -1).map((operator, index) => {
                return (
                    <Card className='mb-6 md:mb-0' key={index} data={{ url: `/bus_operator/detail?name=${operator.name}`, title: operator.name, date: operator.date }} />
                )
            })
        }
    </div>
}