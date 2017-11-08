export function loadProyectsSuccess(proyects) {
  return {type: "LOAD_PROJECTS_SUCCESS", projects};
}
//este es un thunk porque es asincrono
export function loadProjects() {
  return function(dispatch) {
    return fetch("https://still-harbor-68517.herokuapp.com/mobileprojects/")
    .then(r => r.json()).then(data => {
      return dispatch(loadProjectsSuccess(data.results));
    }).catch(e => {
      throw(e)
    });
  }
}
