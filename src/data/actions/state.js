// Example with no data
export const incTeamOne = () => {
    return {
        type: "INC_TEAM_ONE",
    }
}

// Example with data
export const updateTeamOneName = (data) => {
    return {
        type: "UPDATE_TEAM_ONE",
        data: data,
    }
}