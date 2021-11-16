import LocationsList from '../views/locations/LocationsList.vue'
import LocationsCreate from '../views/locations/LocationsCreate.vue'
import LocationsDetail from '../views/locations/LocationsDetail.vue'

export default [
  {
    path: '/locaciones',
    name: 'locations-list',
    component: LocationsList
  },
  {
    path: '/locaciones/:id',
    name: 'locations-edit',
    component: LocationsDetail
  },
  {
    path: '/locaciones/create',
    name: 'locations-create',
    component: LocationsCreate,
  }
];
///Child Sample
/*export default [
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
      }
    ],
  },
  {
    path: '/locaciones/:id',
    name: 'location-edit',
    component: Location
  }
];*/