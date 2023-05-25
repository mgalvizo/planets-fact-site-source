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

enum Physical_Characteristics {
    overview = 'overview',
    structure = 'structure',
    geology = 'geology',
}

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

const loadPlanet = async (planetName: string) => {
    const planet = PLANETS.find(planet => {
        return planet.name.toLowerCase() === planetName;
    });

    if (!planet) {
        throw json(
            { message: 'Could not fetch details for selected planet' },
            { status: 500 }
        );
    }

    return planet;
};

const loader = async ({ request, params }: LoaderFunctionArgs) => {
    const { planetName, characteristic } = params;

    if (!planetName || !characteristic) {
        return;
    }

    // Checks if characteristic has a value of "overview" or "structure" or "geology"
    if (
        !Object.values(Physical_Characteristics).includes(
            characteristic as unknown as Physical_Characteristics
        )
    ) {
        throw json(
            { message: 'Could not fetch details for selected characteristic' },
            { status: 500 }
        );
    }

    return defer({
        planet: await loadPlanet(planetName),
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
