import { CodedocConfig } from '@codedoc/core';
import { Footer as _Footer} from '@codedoc/core/components';


export function Footer(config: CodedocConfig, renderer: any) {
  return <_Footer>
    <a href="https://github.com/${config.misc.github.user}/${config.misc.github.repo}">GitHub</a>  {/* --> link to github*/}
    <hr/>
    <a href="https://www.curseforge.com/minecraft/mc-mods/astromine-main">CurseForge</a>          {/* --> link to twitter*/}
  </_Footer>;
}
