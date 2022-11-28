import { Injectable } from '@angular/core';
import { ScriptStore } from '../interfaces/scripts';

declare var gapi: any;

const loadClient = () => {
  gapi.client.setApiKey('');
  return gapi.client
    .load('https://civicinfo.googleapis.com/$discovery/rest?version=v2')
    .then(() => {
      console.log('GAPI client loaded for API');
    });
};
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

@Injectable({
  providedIn: 'root',
})
export class ScriptsService {
  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src,
      };
    });
  }
  load(...scripts: string[]) {
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  async loadScript(name: string) {
    return new Promise(async (resolve, reject) => {
      //resolve if already loaded
      if (this.scripts[name].loaded) {
        return resolve({
          script: name,
          loaded: true,
          status: 'Already Loaded',
        });
      }
      //load script
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.scripts[name].src;
      script.onload = async () => {
        this.scripts[name].loaded = true;
        resolve({ script: name, loaded: true, status: 'Loaded' });
      };
      script.onerror = (error: any) =>
        resolve({ script: name, loaded: false, status: 'Loaded' });
      let head = document.getElementsByTagName('head')[0];
      console.log('head', head);
      document.getElementsByTagName('head')[0].appendChild(script);
      await sleep(2000);
      head = document.getElementsByTagName('head')[0];
      console.log('head', head);
    });
  }
}
