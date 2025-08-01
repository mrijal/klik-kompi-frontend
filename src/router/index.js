import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../pages/LandingPage.vue'
import Login from '../pages/LoginPage.vue'
import Register from '../pages/RegisterPage.vue'

import AdminDashboard from '../pages/admin/DashboardAdmin.vue'
import AdminCategories from '../pages/admin/Categories.vue'
import AdminProducts from '../pages/admin/Products.vue'
import AdminOrders from '../pages/admin/Orders.vue'

const routes = [
    { path: '/', component: LandingPage },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/admin/dashboard', component: AdminDashboard },
    { path: '/admin/categories', component: AdminCategories },
    { path: '/admin/products', component: AdminProducts },
    { path: '/admin/orders', component: AdminOrders },
    {
        path: '/',
        name: 'Landing',
        component: () => import('../pages/LandingPage.vue')},
    {
        path: '/services',
        name: 'Services',
        component: () => import('../pages/ServicePage.vue')
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('../pages/ProductsPage.vue')
    },
    {
        path: '/products/:id',
        name: 'ProductDetail',
        component: () => import('../pages/ProductDetailPage.vue')
    }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
