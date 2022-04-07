import CustomerList from '../views/customers/CustomersList.vue'
import CustomerCreate from '../views/customers/CustomersCreate.vue'
import CustomerDetail from '../views/customers/CustomersDetail.vue'
import CustomerView from '../views/customers/CustomersView.vue'

export default [
  {
    path: '/customers',
    name: 'customers-list',
    component: CustomerList
  },
  {
    path: '/customers/:id',
    name: 'customers-view',
    component: CustomerView
  },
  {
    path: '/customers/:id/edit',
    name: 'customers-edit',
    component: CustomerDetail
  },
  {
    path: '/customers/create',
    name: 'customers-create',
    component: CustomerCreate,
  }
];