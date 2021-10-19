export const goHome = (history) => {
    history.push("/")
}

export const goDetails = (history, id) => {
    history.push(`/movie/${id}`)
}

export const goBack = (history) => {
    history.goBack()
}