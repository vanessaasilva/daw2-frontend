import PaginaLogin from '../../pages/PaginaLogin'

const PublicRouters = {
    path: '/',
    children: [
      {
        path: 'login',
        element: <PaginaLogin/>
      }
    ]
};

export default PublicRouters