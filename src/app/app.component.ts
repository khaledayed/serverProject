import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name: 'Testserver', types: 'server' , content: 'Just a test!'}];

onServerAdded(serverData: {serverName: string, serverContent: string}) {
  this.serverElements.push({
    name : serverData.serverName,
    types: 'server',
    content: serverData.serverContent,
  });

}
onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
this.serverElements.push({
  name: blueprintData.serverName,
  types: 'blueprint',
  content: blueprintData.serverContent,
})
}

}
