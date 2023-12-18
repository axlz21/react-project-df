import { request } from "../lib/requester"

const baseUrl = "http://localhost:3030/jsonstore/teams"


export const getAll = async () => {
    const result = await request('GET', baseUrl);
    return Object.values(result)
};

export const create = async (teamData) => {
    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(teamData)
    }
    )

    const result = await response.JSON

    return result
}

