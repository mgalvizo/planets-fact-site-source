import React, { Suspense } from 'react';
import {
    LoaderFunctionArgs,
    defer,
    json,
    useRouteLoaderData,
    Await,
} from 'react-router-dom';
import PLANETS from '../dev-data/planets.json';
import PlanetDetailContent from '../components/PlanetDetailContent/PlanetDetailContent.component';

export interface Planet {
    name: string;
    overview: {
        content: string;
        source: string;
    };
    structure: {
        content: string;
        source: string;
    };
    geology: {
        content: string;
        source: string;
    };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: {
        planet: string;
        internal: string;
        geology: string;
    };
}

interface Data {
    planet: Planet;
}

const loadPlanet = async (name: string) => {
    const planet = PLANETS.find(planet =>
        planet.name.toLowerCase().includes(name)
    );

    if (!planet) {
        throw json(
            { message: 'Could not fetch details for selected planet' },
            { status: 500 }
        );
    }

    return planet;
};

const loader = async ({ request, params }: LoaderFunctionArgs) => {
    const name = params.name;

    if (!name) {
        return;
    }

    return defer({
        planet: await loadPlanet(name),
    });
};

const PlanetDetailPage = () => {
    const data = useRouteLoaderData('planet-detail') as Data;
    const { planet } = data;

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={planet}>
                    {loadedPlanet => (
                        <PlanetDetailContent planet={loadedPlanet} />
                    )}
                </Await>
            </Suspense>
        </>
    );
};

export { loader };

export default PlanetDetailPage;
