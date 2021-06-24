export const goHomePage = (history) => {
    history.push("/");
  };

  export const goListTripPage = (history) => {
      history.push("/trip/list")
  };

  export const goApplicationFormPage = (history) => {
      history.push("/trips/application")
  };

  export const goLoginPage = (history) => {
      history.push("/login")
  };

  export const goCreateTripPage = (history) => {
      history.push("/admin/trips/create")
  };

  export const goAdminHomePage = (history) => {
      history.push("/admin/trips/list")
  };

  export const goTripDetailsPage = (history) => {
      history.push("/addmin/trips/create")
  };

  export const goToLastPage = (history) => {
    history.goBack();
  };