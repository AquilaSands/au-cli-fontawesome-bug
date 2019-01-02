import {Aurelia} from 'aurelia-framework';
import environment from './environment';
import { FontAwesome } from './font-awesome';

export function configure(aurelia: Aurelia) {
  const fontAwesome: FontAwesome = aurelia.container.get(FontAwesome);
  fontAwesome.loadIcons();

  aurelia.use
    .standardConfiguration()
    .feature('resources');

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  return aurelia.start().then(() => aurelia.setRoot());
}
