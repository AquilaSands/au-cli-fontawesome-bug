import { config, dom, library } from '@fortawesome/fontawesome-svg-core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

export class FontAwesome {

    private loaded = false;

    public loadIcons = () => {
        if (!this.loaded) {
            config.keepOriginalSource = false;
            config.observeMutations = true;
            config.autoReplaceSvg = true;

            library.add(                
                faCog
            );
           dom.watch();
            this.loaded = true;
        }
    }
}
