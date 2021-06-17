'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-015babfec72f3c5d8c93a1548e5e552e"' : 'data-target="#xs-components-links-module-AppModule-015babfec72f3c5d8c93a1548e5e552e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-015babfec72f3c5d8c93a1548e5e552e"' :
                                            'id="xs-components-links-module-AppModule-015babfec72f3c5d8c93a1548e5e552e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatepickerPillModule.html" data-type="entity-link">DatepickerPillModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DatepickerPillModule-96d5b4c963d8495e29dd39c11499ebcf"' : 'data-target="#xs-components-links-module-DatepickerPillModule-96d5b4c963d8495e29dd39c11499ebcf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DatepickerPillModule-96d5b4c963d8495e29dd39c11499ebcf"' :
                                            'id="xs-components-links-module-DatepickerPillModule-96d5b4c963d8495e29dd39c11499ebcf"' }>
                                            <li class="link">
                                                <a href="components/DatepickerPillComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatepickerPillComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InteractionCardModule.html" data-type="entity-link">InteractionCardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InteractionCardModule-5742cc234b8f84e9e808b475fc77b94c"' : 'data-target="#xs-components-links-module-InteractionCardModule-5742cc234b8f84e9e808b475fc77b94c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InteractionCardModule-5742cc234b8f84e9e808b475fc77b94c"' :
                                            'id="xs-components-links-module-InteractionCardModule-5742cc234b8f84e9e808b475fc77b94c"' }>
                                            <li class="link">
                                                <a href="components/InteractionCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InteractionCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InteractionPopupModule.html" data-type="entity-link">InteractionPopupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InteractionPopupModule-503c0398032050b49c002b3cb49c25db"' : 'data-target="#xs-components-links-module-InteractionPopupModule-503c0398032050b49c002b3cb49c25db"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InteractionPopupModule-503c0398032050b49c002b3cb49c25db"' :
                                            'id="xs-components-links-module-InteractionPopupModule-503c0398032050b49c002b3cb49c25db"' }>
                                            <li class="link">
                                                <a href="components/InteractionPopupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InteractionPopupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InteractionsModule.html" data-type="entity-link">InteractionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InteractionsModule-0e7761ebdc1a11b5614ccd6fb940fb5a"' : 'data-target="#xs-components-links-module-InteractionsModule-0e7761ebdc1a11b5614ccd6fb940fb5a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InteractionsModule-0e7761ebdc1a11b5614ccd6fb940fb5a"' :
                                            'id="xs-components-links-module-InteractionsModule-0e7761ebdc1a11b5614ccd6fb940fb5a"' }>
                                            <li class="link">
                                                <a href="components/InteractionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InteractionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InteractionsRoutingModule.html" data-type="entity-link">InteractionsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LandingModule.html" data-type="entity-link">LandingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LandingModule-0181c67cf4a79dee8256a50aa2eb946b"' : 'data-target="#xs-components-links-module-LandingModule-0181c67cf4a79dee8256a50aa2eb946b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LandingModule-0181c67cf4a79dee8256a50aa2eb946b"' :
                                            'id="xs-components-links-module-LandingModule-0181c67cf4a79dee8256a50aa2eb946b"' }>
                                            <li class="link">
                                                <a href="components/LandingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LandingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LandingRoutingModule.html" data-type="entity-link">LandingRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ParticipantCardModule.html" data-type="entity-link">ParticipantCardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ParticipantCardModule-26a897095448ea01eaa1bbfa7e73da4d"' : 'data-target="#xs-components-links-module-ParticipantCardModule-26a897095448ea01eaa1bbfa7e73da4d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParticipantCardModule-26a897095448ea01eaa1bbfa7e73da4d"' :
                                            'id="xs-components-links-module-ParticipantCardModule-26a897095448ea01eaa1bbfa7e73da4d"' }>
                                            <li class="link">
                                                <a href="components/ParticipantCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParticipantCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParticipantEditorModule.html" data-type="entity-link">ParticipantEditorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ParticipantEditorModule-591fc87ebdbb70943754af767d9d111a"' : 'data-target="#xs-components-links-module-ParticipantEditorModule-591fc87ebdbb70943754af767d9d111a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParticipantEditorModule-591fc87ebdbb70943754af767d9d111a"' :
                                            'id="xs-components-links-module-ParticipantEditorModule-591fc87ebdbb70943754af767d9d111a"' }>
                                            <li class="link">
                                                <a href="components/ParticipantEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParticipantEditorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParticipantPopupModule.html" data-type="entity-link">ParticipantPopupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ParticipantPopupModule-790c874834b423094877894ca17ebfbf"' : 'data-target="#xs-components-links-module-ParticipantPopupModule-790c874834b423094877894ca17ebfbf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParticipantPopupModule-790c874834b423094877894ca17ebfbf"' :
                                            'id="xs-components-links-module-ParticipantPopupModule-790c874834b423094877894ca17ebfbf"' }>
                                            <li class="link">
                                                <a href="components/ParticipantPopupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParticipantPopupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParticipantsModule.html" data-type="entity-link">ParticipantsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ParticipantsModule-195fc54347aa73912fa5d6d4ed979ea6"' : 'data-target="#xs-components-links-module-ParticipantsModule-195fc54347aa73912fa5d6d4ed979ea6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParticipantsModule-195fc54347aa73912fa5d6d4ed979ea6"' :
                                            'id="xs-components-links-module-ParticipantsModule-195fc54347aa73912fa5d6d4ed979ea6"' }>
                                            <li class="link">
                                                <a href="components/ParticipantsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParticipantsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParticipantsRoutingModule.html" data-type="entity-link">ParticipantsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ParticipantsSelectModule.html" data-type="entity-link">ParticipantsSelectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ParticipantsSelectModule-ac74531a31a8990c47d27ea962af715c"' : 'data-target="#xs-components-links-module-ParticipantsSelectModule-ac74531a31a8990c47d27ea962af715c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParticipantsSelectModule-ac74531a31a8990c47d27ea962af715c"' :
                                            'id="xs-components-links-module-ParticipantsSelectModule-ac74531a31a8990c47d27ea962af715c"' }>
                                            <li class="link">
                                                <a href="components/ParticipantsSelectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParticipantsSelectComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReadonlyPillModule.html" data-type="entity-link">ReadonlyPillModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReadonlyPillModule-3683c5c310ee6d07b8547062c5b31ec3"' : 'data-target="#xs-components-links-module-ReadonlyPillModule-3683c5c310ee6d07b8547062c5b31ec3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReadonlyPillModule-3683c5c310ee6d07b8547062c5b31ec3"' :
                                            'id="xs-components-links-module-ReadonlyPillModule-3683c5c310ee6d07b8547062c5b31ec3"' }>
                                            <li class="link">
                                                <a href="components/ReadonlyPillComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReadonlyPillComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/EntityDataSource.html" data-type="entity-link">EntityDataSource</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InteractionParticipantService.html" data-type="entity-link">InteractionParticipantService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InteractionService.html" data-type="entity-link">InteractionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStorageService.html" data-type="entity-link">LocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParticipantService.html" data-type="entity-link">ParticipantService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RedirectService.html" data-type="entity-link">RedirectService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HeadersInterceptor.html" data-type="entity-link">HeadersInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/JwtInterceptor.html" data-type="entity-link">JwtInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/EntityPage.html" data-type="entity-link">EntityPage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPagableService.html" data-type="entity-link">IPagableService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});