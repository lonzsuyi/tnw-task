import { Suspense } from 'react';
import { NavMap, NavMapProps} from '@transport-task/info-components';

import OperatorList from './OperatorList';

export default function BusOperator() {

    // Data
    const navMapData: NavMapProps['data'] = [
        { text: 'Home', url: '/' },
        { text: 'Bus Operator' }
    ];

    return (
        <div className="h-screen">
            <NavMap className="py-4 px-6" data={navMapData} />
            <div className="text-center">
                <h2 className="pt-4 text-xl md:text-2xl font-bold">Transport Of NSW - Bus Operators</h2>
            </div>
            <Suspense>
                <OperatorList />
            </Suspense>
        </div>
    );
}
