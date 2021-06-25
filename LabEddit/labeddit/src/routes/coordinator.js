export const goHomePage = (history) => {
    history.push("/")
};

export const goSignUpPage = (history) => {
    history.push("/signup")
};

export const goPostPage = (history) => {
    history.push("/posts")
};

export const goCommentsPage = (history) => {
    history.push("/comments")
};

export const goToLastPage = (history) => {
  history.goBack();
};