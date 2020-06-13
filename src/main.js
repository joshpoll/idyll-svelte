import App from './App.idyll';

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
});

export default app;