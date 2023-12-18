import * as request from "../lib/requester"

const baseUrl = "http://localhost:3030/jsonstore/teams"


export const getAll = async () => {
    const result = await request.get(baseUrl);
    return Object.values(result)
};

export const create = async (teamData) => {
    const result = await request.post(baseUrl, teamData);
    return result
}

export const getOne = async (teamId) => {
    const result = await request.get(`${baseUrl}/${teamId}`);

    return result;
}