import httpRequest, { ResponseResult } from '../../../utils/httpRequest';

export type Operator = {
    name: string
    date: string
    routes: {
        id: string,
        routeVariant: string,
        deviationFromTimetable?: null | number
    }[]
}

export const getOperatorsUrl = `/asset/json/bus-services.example.json`;
export async function getOperators(): Promise<ResponseResult<Operator[]>> {
    return new Promise((resolve) => {
        const res: ResponseResult<Operator[]> = {
            message: '',
            code: 200,
            data: [
                {
                    "name": "Sydney Buses",
                    "date": "25/09/2021",
                    "routes": [
                        {
                            "id": "42612",
                            "routeVariant": "891 2 1",
                            "deviationFromTimetable": 77
                        },
                        {
                            "id": "29016",
                            "routeVariant": "400 1 1",
                            "deviationFromTimetable": 0
                        },
                        {
                            "id": "90467",
                            "routeVariant": "393 1 1",
                            "deviationFromTimetable": -10
                        },
                        {
                            "id": "88836",
                            "routeVariant": "UNKNOWN",
                            "deviationFromTimetable": null
                        },
                        {
                            "id": "79367",
                            "routeVariant": "L21 2 1",
                            "deviationFromTimetable": 347
                        }
                    ]
                },
                {
                    "name": "Westbus",
                    "date": "25/09/2021",
                    "routes": [
                        {
                            "id": "94811",
                            "routeVariant": "664 2 1",
                            "deviationFromTimetable": 164
                        },
                        {
                            "id": "62788",
                            "routeVariant": "UNKNOWN",
                            "deviationFromTimetable": null
                        },
                        {
                            "id": "14221",
                            "routeVariant": "834 1 1",
                            "deviationFromTimetable": 423
                        }
                    ]
                },
                {
                    "name": "Other Buses",
                    "date": "20/09/2024",
                    "routes": [
                        {
                            "id": "94811",
                            "routeVariant": "664 2 1",
                            "deviationFromTimetable": 164
                        },
                        {
                            "id": "62788",
                            "routeVariant": "UNKNOWN",
                            "deviationFromTimetable": null
                        },
                        {
                            "id": "14221",
                            "routeVariant": "834 1 1",
                            "deviationFromTimetable": 423
                        }
                    ]
                }
            ]
        }
        resolve(res)
    })
    // return (await httpRequest.get(getOperatorsUrl));
}