const {
  HashRouter,
  Link,
  Route,
  Switch
} = ReactRouterDOM;

const Ipoteka = () => (
  <div>
    <h2>Ипотека</h2>
    ...
   </div>
)

const About = () => (
  <div>
    <h2>About Us</h2>
    ...
   </div>
)

const Services = () => (
  <div>
    <h2>Services</h2>
    ...
   </div>
)

ReactDOM.render(
  <HashRouter>
    <div>
      <nav>
        <Link to={'/'}>Ипотека</Link>
        <Link to={'/about'}>About Us</Link>
        <Link to={'/services'}>Services</Link>
      </nav>
      <main>
        <Switch>
        <Route path="/ipo" component={Ipoteka} />
        <Route exact path="/" component={Ipoteka} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        </Switch>
      </main>
    </div>
  </HashRouter>,
  document.getElementById("app")
 )