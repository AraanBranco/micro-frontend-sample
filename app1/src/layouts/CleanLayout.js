import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import Contact from '../components/Contact'
import About from '../components/About'
import Blog from '../components/Blog'
import Portfolio from '../components/Portfolio'

export default function CleanLayout() {
  return (
    <>
      <h1 class="w-full text-center">APP 2</h1>
      <div class="md:flex flex-col md:flex-row md:min-h-screen w-full h-screen">
        <div class="flex flex-col w-full md:w-64 text-gray-700 bg-white flex-shrink-0">
          <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
            <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/blog">Blog</a>
            <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/portfolio">Portfolio</a>
            <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/about">About</a>
            <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/contact">Contact</a>
          </nav>
        </div>

        <Router>
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </ Router>
      </div>
    </>
  )
}
