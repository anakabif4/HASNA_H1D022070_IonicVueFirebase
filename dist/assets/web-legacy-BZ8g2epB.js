System.register(["./index-legacy-R56HAk2f.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.W}],execute:function(){e("GoogleAuthWeb",class extends n{constructor(){super()}loadScript(){if("undefined"==typeof document)return;const e="gapi";if(null===document||void 0===document?void 0:document.getElementById(e))return;const t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.defer=!0,n.async=!0,n.id=e,n.onload=this.platformJsLoaded.bind(this),n.src="https://apis.google.com/js/platform.js",t.appendChild(n)}initialize(e={clientId:"",scopes:[],grantOfflineAccess:!1}){var t,n;if("undefined"==typeof window)return;const s=null===(t=document.getElementsByName("google-signin-client_id")[0])||void 0===t?void 0:t.content,i=e.clientId||s||"";return i||console.warn("GoogleAuthPlugin - clientId is empty"),this.options={clientId:i,grantOfflineAccess:null!==(n=e.grantOfflineAccess)&&void 0!==n&&n,scopes:e.scopes||[]},this.gapiLoaded=new Promise((e=>{window.gapiResolve=e,this.loadScript()})),this.addUserChangeListener(),this.gapiLoaded}platformJsLoaded(){gapi.load("auth2",(()=>{const e={client_id:this.options.clientId,plugin_name:"CodetrixStudioCapacitorGoogleAuth"};this.options.scopes.length&&(e.scope=this.options.scopes.join(" ")),gapi.auth2.init(e),window.gapiResolve()}))}async signIn(){return new Promise((async(e,t)=>{var n;try{let t;const s=null!==(n=this.options.grantOfflineAccess)&&void 0!==n&&n;s?t=(await gapi.auth2.getAuthInstance().grantOfflineAccess()).code:await gapi.auth2.getAuthInstance().signIn();const i=gapi.auth2.getAuthInstance().currentUser.get();s&&await i.reloadAuthResponse();const a=this.getUserFrom(i);a.serverAuthCode=t,e(a)}catch(s){t(s)}}))}async refresh(){const e=await gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();return{accessToken:e.access_token,idToken:e.id_token,refreshToken:""}}async signOut(){return gapi.auth2.getAuthInstance().signOut()}async addUserChangeListener(){await this.gapiLoaded,gapi.auth2.getAuthInstance().currentUser.listen((e=>{this.notifyListeners("userChange",e.isSignedIn()?this.getUserFrom(e):null)}))}getUserFrom(e){const t={},n=e.getBasicProfile();t.email=n.getEmail(),t.familyName=n.getFamilyName(),t.givenName=n.getGivenName(),t.id=n.getId(),t.imageUrl=n.getImageUrl(),t.name=n.getName();const s=e.getAuthResponse(!0);return t.authentication={accessToken:s.access_token,idToken:s.id_token,refreshToken:""},t}})}}}));
