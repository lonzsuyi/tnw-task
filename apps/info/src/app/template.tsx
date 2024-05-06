import { Providers } from '../hook/providers';
import { Navigation } from '@transport-task/info-components';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            <Navigation className="bg-white" />
            <main className="bg-white">{children}</main>
        </Providers>
    )
}