import PartList from '../views/parts/PartsList.vue'
import PartCreate from '../views/parts/PartsCreate.vue'
import PartDetail from '../views/parts/PartsDetail.vue'
import PartSearch from '../views/parts/PartsSearch.vue'

export default [
  {
    path: '/parts',
    name: 'parts-list',
    component: PartList
  },
  {
    path: '/parts/:id',
    name: 'parts-edit',
    component: PartDetail
  },
  {
    path: '/parts/create',
    name: 'parts-create',
    component: PartCreate,
  }
  ,
  {
    path: '/parts/search',
    name: 'parts-search',
    component: PartSearch,
  }
];