//get pages of frontend, same is necesary to backend
import frontendPages from '@imagina/quser/_config/frontendPages'
import appConfig from 'src/config/app'

let localPages = {
	//User Index
	userIndex: {
		permission: 'profile.user.manage',
		activated: true,
		path: '/users/index',
		name: 'quser.admin.users',
    crud : import('@imagina/quser/_crud/users'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
		layout: () => import('@imagina/qsite/_layouts/master.vue'),
		title: 'quser.sidebar.adminUserIndex',
		icon: 'fas fa-users',
		authenticated: true,
		subHeader: {
			refresh: true,
		}
	},
	//User Departments
	userDepartments: {
		permission: 'profile.departments.index',
		activated: true,
		path: '/departments',
		name: 'quser.admin.departments',
    crud : import('@imagina/quser/_crud/departments'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
		layout: () => import('@imagina/qsite/_layouts/master.vue'),
		isCrud: true,
		title: 'quser.sidebar.adminUserDepartments',
		icon: 'fas fa-user-shield',
		authenticated: true,
		subHeader: {
			refresh: true,
			breadcrumb : ['quser.userIndex']
		}
	},
	//User Roles
	userRoles: {
		permission: 'profile.role.index',
		activated: true,
		path: '/roles',
		name: 'quser.admin.roles',
    crud : import('@imagina/quser/_crud/roles'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
		layout: () => import('@imagina/qsite/_layouts/master.vue'),
		isCrud: true,
		title: 'quser.sidebar.adminUserRoles',
		icon: 'fas fa-user-tag',
		authenticated: true,
		subHeader: {
			refresh: true,
			breadcrumb : ['quser.userIndex']
		}
	},
}

const responseRoutes = (!appConfig.isBackend && appConfig.loadBackendPages) ? localPages : {...frontendPages, ...localPages}
//Return local page merged with frontend pages
export default responseRoutes
