const api={};
const root='http://localhost:9091/';

api.signup=root+'sign-up';
api.login=root+'login';
api.logout=root+'logout';
api.checkLogin=root+'checkLogin';
api.publish=root+'publish';
api.contentAll=root+'content/all';
api.contentPerson=root+'content/person';
api.content=root+'content/';
api.update=root+'update';

export default api;
