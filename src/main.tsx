import renderer, { create, tsx } from "@dojo/framework/core/vdom";
import * as css from "./MyWidget.m.css";

const factory = create({});

const MyWidget = factory(function MyWidget() {
  return <div classes={css.root} />;
});

const r = renderer(() => <MyWidget />);
r.mount();
