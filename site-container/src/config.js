const { REACT_APP_FIRST_APP_URL, REACT_APP_SECOND_APP_URL } = process.env

const menuConfig = [
  {
    name: 'App 1',
    slug: 'app1',
    url: REACT_APP_FIRST_APP_URL
  },
  {
    name: 'App 2',
    slug: 'app2',
    url: REACT_APP_SECOND_APP_URL
  }
]

export const getMenu = () => {
  return menuConfig
}
