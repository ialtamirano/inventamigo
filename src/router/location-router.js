import LocationsList from '../views/locations/LocationsList.vue'
import LocationsCreate from '../views/locations/LocationsCreate.vue'

export default [
  {
    path: '/locaciones',
    name: 'locations-list',
    component: LocationsList,
    title: 'Locations',  
    children: [ 
      {
        path: 'create',
        name: 'locations-create',
        component: LocationsCreate,
      },
      {
        path: ':id',
        name: 'locations-details',
        component: LocationsCreate,
      }
    ],
  },
];