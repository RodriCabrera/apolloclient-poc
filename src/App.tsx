import { Route, Switch } from "wouter";
import { CharactersPage } from "./pages/CharactersPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/characters" component={CharactersPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
