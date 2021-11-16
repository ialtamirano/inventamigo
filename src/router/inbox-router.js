import InboxList from '../views/inbox/InboxList.vue'
import InboxDetail from '../views/inbox/InboxDetail.vue'

export default [
  {
    path: '/inbox',
    name: 'inbox-list',
    component: InboxList,
    title: 'Inbox',  
    
  },
  /*{
    path: '/inbox/create',
    name: 'inbox-create',
    component: InboxCreate,
  },*/
  {
    path: '/inbox/:id',
    name: 'inbox-edit',
    component: InboxDetail
  }
];
///Child Sample
/*export default [
  {
    path: '/inbox',
    name: 'inbox-list',
    component: InboxList,
    title: 'Inbox',  
    children: [ 
      {
        path: 'create',
        name: 'inbox-create',
        component: InboxCreate,
      }
    ],
  },
  {
    path: '/inbox/:id',
    name: 'location-edit',
    component: Inbox
  }
];*/