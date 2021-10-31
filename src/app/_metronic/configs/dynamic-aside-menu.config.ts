export const DynamicAsideMenuConfig = {
  items: [
    {
      title: 'Dashboard',
      root: true,
      icon: 'flaticon2-architecture-and-city',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/dashboard',
      translate: 'MENU.DASHBOARD',
      bullet: 'dot',
    },
    {
      title: 'Layout Builder',
      root: true,
      icon: 'flaticon2-expand',
      page: '/builder',
      svg: './assets/media/svg/icons/Home/Library.svg'
    },
    { section: 'Components' },

    { section: 'Applications' },


    {
      title: 'Teacher',
      root: true,
      icon: 'flaticon2-expand',
      page: '/teacher',
      svg: './assets/media/svg/icons/Home/Library.svg'
    },

    { section: 'Custom' },

    {
      title: 'Error Pages',
      root: true,
      bullet: 'dot',
      icon: 'flaticon2-list-2',
      svg: './assets/media/svg/icons/Code/Warning-2.svg',
      page: '/error',
      submenu: [
        {
          title: 'Error 1',
          page: '/error/error-1'
        },
        {
          title: 'Error 2',
          page: '/error/error-2'
        },
        {
          title: 'Error 3',
          page: '/error/error-3'
        },
        {
          title: 'Error 4',
          page: '/error/error-4'
        },
        {
          title: 'Error 5',
          page: '/error/error-5'
        },
        {
          title: 'Error 6',
          page: '/error/error-6'
        },
      ]
    },
  ]
};
