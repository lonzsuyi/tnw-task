import { Suspense } from 'react';
import { NavMap, NavMapProps } from '@transport-task/info-components';

import OperatorTable from './OperatorTable';

export default function BusOperatorDetail(request: { searchParams: { name: string; }; }) {

    // Data
    const name = request.searchParams.name;
    const navMapData: NavMapProps['data'] = [
        { text: 'Home', url: '/' },
        { text: 'Bus Operator', url: '/bus_operator' },
        { text: 'Bus Operator Detail' },
        { text: 'Back', url: '/bus_operator' }
    ];
    
    return (
        <div className="h-screen">
            <NavMap className="py-4 px-6" data={navMapData} />
            <Suspense>
                <OperatorTable name={name} />
            </Suspense>
        </div>
    );
}
