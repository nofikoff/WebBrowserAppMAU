import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private network: Network

    ) {
        this.initializeApp();
    }


// watch network for a disconnection
    public  disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        console.log('network was disconnected :-(!!!!!!!!!!!!!!!!!');
    });

// stop disconnect watch
    //disconnectSubscription.unsubscribe();


// watch network for a connection
    public connectSubscription = this.network.onConnect().subscribe(() => {
        console.log('network connected!');
        // We just got a connection but we need to wait briefly
        // before we determine the connection type. Might need to wait.
        // prior to doing any api requests as well.
        setTimeout(() => {
            if (this.network.type === 'wifi') {
                console.log('we got a wifi connection, woohoo!!');
            }
        }, 3000);
    });

// stop connect watch
    //connectSubscription.unsubscribe();




    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}



