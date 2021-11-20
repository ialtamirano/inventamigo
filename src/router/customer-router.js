import LocationsList from '../views/customers/CustomerList.vue'
import CustomerCreate from '../views/customers/CustomerCreate.vue'
import CustomerDetail from '../views/customers/CustomerDetail.vue'

export default [
  {
    path: '/customers',
    name: 'customers-list',
    component: CustomerList
  },
  {
    path: '/customers/:id',
    name: 'customers-edit',
    component: CustomerDetail
  },
  {
    path: '/customers/create',
    name: 'customers-create',
    component: CustomerCreate,
  }
];