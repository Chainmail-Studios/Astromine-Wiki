import { getRenderer } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { reloadOnChange } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/serve/reload.js';reloadOnChange();
import { ToCPrevNext } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { CollapseControl } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';
import { GithubSearch } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/shedaniel/Documents/JavaCoding/Astromine-Wiki/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';

const components = {
  'wk1p3W9lKfMFxlBChaTzmA==': ToCPrevNext,
  '1lByhs+e4sDz+d+nd7mdeA==': CollapseControl,
  'Md786W+tdw+gVjKQzaNQhA==': GithubSearch,
  'nxVcQMXgr6u+SaJqxx+Z/g==': ToCToggle,
  '/M5/F5s7/39j2houOieVKw==': DarkModeSwitch,
  'HD55NNhmtz8WwQulIuiKhg==': ConfigTransport
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
