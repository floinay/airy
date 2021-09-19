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
                    <a href="index.html" data-type="index-link">airy-ui documentation</a>
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
                                <a href="modules/AirActionsModule.html" data-type="entity-link" >AirActionsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AirButtonModule.html" data-type="entity-link" >AirButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AirButtonModule-b23c7cb3662e3560943f97148792317d"' : 'data-target="#xs-components-links-module-AirButtonModule-b23c7cb3662e3560943f97148792317d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AirButtonModule-b23c7cb3662e3560943f97148792317d"' :
                                            'id="xs-components-links-module-AirButtonModule-b23c7cb3662e3560943f97148792317d"' }>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirCdkModule.html" data-type="entity-link" >AirCdkModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AirCdkModule-56ea630c4900afe87e8b3aa0ad601063"' : 'data-target="#xs-directives-links-module-AirCdkModule-56ea630c4900afe87e8b3aa0ad601063"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AirCdkModule-56ea630c4900afe87e8b3aa0ad601063"' :
                                        'id="xs-directives-links-module-AirCdkModule-56ea630c4900afe87e8b3aa0ad601063"' }>
                                        <li class="link">
                                            <a href="directives/AutofocusDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutofocusDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ClearInputBeforeUploadDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClearInputBeforeUploadDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HideIfEmptyDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HideIfEmptyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OverlayDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverlayDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollToMeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollToMeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ThemeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AirCdkModule-56ea630c4900afe87e8b3aa0ad601063"' : 'data-target="#xs-pipes-links-module-AirCdkModule-56ea630c4900afe87e8b3aa0ad601063"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AirCdkModule-56ea630c4900afe87e8b3aa0ad601063"' :
                                            'id="xs-pipes-links-module-AirCdkModule-56ea630c4900afe87e8b3aa0ad601063"' }>
                                            <li class="link">
                                                <a href="pipes/MergePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MergePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceStringPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceVarsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceVarsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirControlsModule.html" data-type="entity-link" >AirControlsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AirControlsModule-bf89950cb988ea41f296c57131981cb1"' : 'data-target="#xs-components-links-module-AirControlsModule-bf89950cb988ea41f296c57131981cb1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AirControlsModule-bf89950cb988ea41f296c57131981cb1"' :
                                            'id="xs-components-links-module-AirControlsModule-bf89950cb988ea41f296c57131981cb1"' }>
                                            <li class="link">
                                                <a href="components/AutocompleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutocompleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FileItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormFieldComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormFieldComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputColorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputColorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LabelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LabelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OptionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OptionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RadioButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RadioButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RadioGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RadioGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToggleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToggleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AirControlsModule-bf89950cb988ea41f296c57131981cb1"' : 'data-target="#xs-directives-links-module-AirControlsModule-bf89950cb988ea41f296c57131981cb1"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AirControlsModule-bf89950cb988ea41f296c57131981cb1"' :
                                        'id="xs-directives-links-module-AirControlsModule-bf89950cb988ea41f296c57131981cb1"' }>
                                        <li class="link">
                                            <a href="directives/AutocompleteDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutocompleteDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AutofocusDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutofocusDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ClearInputBeforeUploadDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClearInputBeforeUploadDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HideIfEmptyDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HideIfEmptyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/InputAutoWidthDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputAutoWidthDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/InputDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OverlayDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverlayDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollToMeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollToMeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TextareaAutosizeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextareaAutosizeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ThemeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AirControlsModule-bf89950cb988ea41f296c57131981cb1"' : 'data-target="#xs-pipes-links-module-AirControlsModule-bf89950cb988ea41f296c57131981cb1"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AirControlsModule-bf89950cb988ea41f296c57131981cb1"' :
                                            'id="xs-pipes-links-module-AirControlsModule-bf89950cb988ea41f296c57131981cb1"' }>
                                            <li class="link">
                                                <a href="pipes/MergePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MergePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceStringPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceVarsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceVarsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SimpleAutocompletePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SimpleAutocompletePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirDirectionModule.html" data-type="entity-link" >AirDirectionModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AirDirectionModule-a2fadbd15553232bc513844183d6dcef"' : 'data-target="#xs-directives-links-module-AirDirectionModule-a2fadbd15553232bc513844183d6dcef"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AirDirectionModule-a2fadbd15553232bc513844183d6dcef"' :
                                        'id="xs-directives-links-module-AirDirectionModule-a2fadbd15553232bc513844183d6dcef"' }>
                                        <li class="link">
                                            <a href="directives/AutofocusDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutofocusDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ClearInputBeforeUploadDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClearInputBeforeUploadDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DirectionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DirectionDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HideIfEmptyDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HideIfEmptyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OverlayDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverlayDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollToMeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollToMeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ThemeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AirDirectionModule-a2fadbd15553232bc513844183d6dcef"' : 'data-target="#xs-injectables-links-module-AirDirectionModule-a2fadbd15553232bc513844183d6dcef"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AirDirectionModule-a2fadbd15553232bc513844183d6dcef"' :
                                        'id="xs-injectables-links-module-AirDirectionModule-a2fadbd15553232bc513844183d6dcef"' }>
                                        <li class="link">
                                            <a href="injectables/DirectionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DirectionService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AirDirectionModule-a2fadbd15553232bc513844183d6dcef"' : 'data-target="#xs-pipes-links-module-AirDirectionModule-a2fadbd15553232bc513844183d6dcef"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AirDirectionModule-a2fadbd15553232bc513844183d6dcef"' :
                                            'id="xs-pipes-links-module-AirDirectionModule-a2fadbd15553232bc513844183d6dcef"' }>
                                            <li class="link">
                                                <a href="pipes/MergePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MergePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceStringPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceVarsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceVarsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirExpansionModule.html" data-type="entity-link" >AirExpansionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AirExpansionModule-b1ca6bec4de142763d26a0c77b2ee82c"' : 'data-target="#xs-components-links-module-AirExpansionModule-b1ca6bec4de142763d26a0c77b2ee82c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AirExpansionModule-b1ca6bec4de142763d26a0c77b2ee82c"' :
                                            'id="xs-components-links-module-AirExpansionModule-b1ca6bec4de142763d26a0c77b2ee82c"' }>
                                            <li class="link">
                                                <a href="components/ExpansionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExpansionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExpansionHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExpansionHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirIconModule.html" data-type="entity-link" >AirIconModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AirIconModule-ca56084ad705675a51ed65e66500d31e"' : 'data-target="#xs-components-links-module-AirIconModule-ca56084ad705675a51ed65e66500d31e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AirIconModule-ca56084ad705675a51ed65e66500d31e"' :
                                            'id="xs-components-links-module-AirIconModule-ca56084ad705675a51ed65e66500d31e"' }>
                                            <li class="link">
                                                <a href="components/DynamicIconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicIconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirLayoutModule.html" data-type="entity-link" >AirLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AirLayoutModule-04b9201c00b70c295f581059f80a7fb7"' : 'data-target="#xs-components-links-module-AirLayoutModule-04b9201c00b70c295f581059f80a7fb7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AirLayoutModule-04b9201c00b70c295f581059f80a7fb7"' :
                                            'id="xs-components-links-module-AirLayoutModule-04b9201c00b70c295f581059f80a7fb7"' }>
                                            <li class="link">
                                                <a href="components/ActionsPortalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActionsPortalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderPortalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderPortalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScrollContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AirLayoutModule-04b9201c00b70c295f581059f80a7fb7"' : 'data-target="#xs-directives-links-module-AirLayoutModule-04b9201c00b70c295f581059f80a7fb7"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AirLayoutModule-04b9201c00b70c295f581059f80a7fb7"' :
                                        'id="xs-directives-links-module-AirLayoutModule-04b9201c00b70c295f581059f80a7fb7"' }>
                                        <li class="link">
                                            <a href="directives/ActionsContainerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActionsContainerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AutofocusDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutofocusDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/BreakpointsDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BreakpointsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ClearInputBeforeUploadDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClearInputBeforeUploadDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ContentDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/EndDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EndDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/FlexDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FlexDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/FooterDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/GridItemDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GridItemDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HeaderContainerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderContainerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HeaderDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HideIfEmptyDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HideIfEmptyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ImpositionContainerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImpositionContainerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ImpositionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImpositionDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/LayoutDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/MarginsDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarginsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OverlayDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverlayDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/PaddingsDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaddingsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollToMeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollToMeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/StartDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/StretchDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StretchDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ThemeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AirLayoutModule-04b9201c00b70c295f581059f80a7fb7"' : 'data-target="#xs-pipes-links-module-AirLayoutModule-04b9201c00b70c295f581059f80a7fb7"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AirLayoutModule-04b9201c00b70c295f581059f80a7fb7"' :
                                            'id="xs-pipes-links-module-AirLayoutModule-04b9201c00b70c295f581059f80a7fb7"' }>
                                            <li class="link">
                                                <a href="pipes/MergePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MergePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceStringPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceVarsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceVarsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirListModule.html" data-type="entity-link" >AirListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AirListModule-90d373fdf455d80d108bbf8a1567c895"' : 'data-target="#xs-components-links-module-AirListModule-90d373fdf455d80d108bbf8a1567c895"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AirListModule-90d373fdf455d80d108bbf8a1567c895"' :
                                            'id="xs-components-links-module-AirListModule-90d373fdf455d80d108bbf8a1567c895"' }>
                                            <li class="link">
                                                <a href="components/DelimiterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DelimiterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirLoadersModule.html" data-type="entity-link" >AirLoadersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AirLoadersModule-c79cbc56e8b70f24229ea132d63001f3"' : 'data-target="#xs-components-links-module-AirLoadersModule-c79cbc56e8b70f24229ea132d63001f3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AirLoadersModule-c79cbc56e8b70f24229ea132d63001f3"' :
                                            'id="xs-components-links-module-AirLoadersModule-c79cbc56e8b70f24229ea132d63001f3"' }>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProgressBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AirLoadersModule-c79cbc56e8b70f24229ea132d63001f3"' : 'data-target="#xs-directives-links-module-AirLoadersModule-c79cbc56e8b70f24229ea132d63001f3"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AirLoadersModule-c79cbc56e8b70f24229ea132d63001f3"' :
                                        'id="xs-directives-links-module-AirLoadersModule-c79cbc56e8b70f24229ea132d63001f3"' }>
                                        <li class="link">
                                            <a href="directives/AutofocusDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutofocusDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ClearInputBeforeUploadDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClearInputBeforeUploadDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HideIfEmptyDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HideIfEmptyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/LoadDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OverlayDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverlayDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollToMeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollToMeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ThemeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AirLoadersModule-c79cbc56e8b70f24229ea132d63001f3"' : 'data-target="#xs-pipes-links-module-AirLoadersModule-c79cbc56e8b70f24229ea132d63001f3"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AirLoadersModule-c79cbc56e8b70f24229ea132d63001f3"' :
                                            'id="xs-pipes-links-module-AirLoadersModule-c79cbc56e8b70f24229ea132d63001f3"' }>
                                            <li class="link">
                                                <a href="pipes/MergePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MergePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceStringPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceVarsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceVarsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirModalModule.html" data-type="entity-link" >AirModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AirModalModule-e086b1491f7b11721a435e4db9a3ec9f"' : 'data-target="#xs-components-links-module-AirModalModule-e086b1491f7b11721a435e4db9a3ec9f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AirModalModule-e086b1491f7b11721a435e4db9a3ec9f"' :
                                            'id="xs-components-links-module-AirModalModule-e086b1491f7b11721a435e4db9a3ec9f"' }>
                                            <li class="link">
                                                <a href="components/CloseModalButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CloseModalButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirNavModule.html" data-type="entity-link" >AirNavModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AirNavModule-3ff8c4fc5a8ed6a497290417555f96ad"' : 'data-target="#xs-components-links-module-AirNavModule-3ff8c4fc5a8ed6a497290417555f96ad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AirNavModule-3ff8c4fc5a8ed6a497290417555f96ad"' :
                                            'id="xs-components-links-module-AirNavModule-3ff8c4fc5a8ed6a497290417555f96ad"' }>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirPopoverModule.html" data-type="entity-link" >AirPopoverModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AirPopoverModule-2b965cb3b781deac76f28ca6ec1a2f27"' : 'data-target="#xs-components-links-module-AirPopoverModule-2b965cb3b781deac76f28ca6ec1a2f27"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AirPopoverModule-2b965cb3b781deac76f28ca6ec1a2f27"' :
                                            'id="xs-components-links-module-AirPopoverModule-2b965cb3b781deac76f28ca6ec1a2f27"' }>
                                            <li class="link">
                                                <a href="components/ConfirmComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PopoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PopoverComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AirPopoverModule-2b965cb3b781deac76f28ca6ec1a2f27"' : 'data-target="#xs-directives-links-module-AirPopoverModule-2b965cb3b781deac76f28ca6ec1a2f27"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AirPopoverModule-2b965cb3b781deac76f28ca6ec1a2f27"' :
                                        'id="xs-directives-links-module-AirPopoverModule-2b965cb3b781deac76f28ca6ec1a2f27"' }>
                                        <li class="link">
                                            <a href="directives/AutofocusDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutofocusDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ClearInputBeforeUploadDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClearInputBeforeUploadDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HideIfEmptyDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HideIfEmptyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OverlayDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverlayDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/PopoverDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PopoverDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollToMeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollToMeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ThemeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AirPopoverModule-2b965cb3b781deac76f28ca6ec1a2f27"' : 'data-target="#xs-pipes-links-module-AirPopoverModule-2b965cb3b781deac76f28ca6ec1a2f27"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AirPopoverModule-2b965cb3b781deac76f28ca6ec1a2f27"' :
                                            'id="xs-pipes-links-module-AirPopoverModule-2b965cb3b781deac76f28ca6ec1a2f27"' }>
                                            <li class="link">
                                                <a href="pipes/MergePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MergePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceStringPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceVarsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceVarsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirTabsModule.html" data-type="entity-link" >AirTabsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1"' : 'data-target="#xs-components-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1"' :
                                            'id="xs-components-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1"' }>
                                            <li class="link">
                                                <a href="components/TabsLinksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsLinksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1"' : 'data-target="#xs-directives-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1"' :
                                        'id="xs-directives-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1"' }>
                                        <li class="link">
                                            <a href="directives/AutofocusDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutofocusDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ClearInputBeforeUploadDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClearInputBeforeUploadDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HideIfEmptyDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HideIfEmptyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OverlayDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverlayDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollToMeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollToMeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TabLinkDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabLinkDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ThemeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1"' : 'data-target="#xs-pipes-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1"' :
                                            'id="xs-pipes-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1"' }>
                                            <li class="link">
                                                <a href="pipes/MergePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MergePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceStringPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceVarsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceVarsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirTabsModule.html" data-type="entity-link" >AirTabsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1-1"' : 'data-target="#xs-components-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1-1"' :
                                            'id="xs-components-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1-1"' }>
                                            <li class="link">
                                                <a href="components/TabsLinksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsLinksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1-1"' : 'data-target="#xs-directives-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1-1"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1-1"' :
                                        'id="xs-directives-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1-1"' }>
                                        <li class="link">
                                            <a href="directives/AutofocusDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutofocusDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ClearInputBeforeUploadDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClearInputBeforeUploadDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HideIfEmptyDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HideIfEmptyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OverlayDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverlayDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollToMeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollToMeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TabLinkDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabLinkDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ThemeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1-1"' : 'data-target="#xs-pipes-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1-1"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1-1"' :
                                            'id="xs-pipes-links-module-AirTabsModule-e85034ddd250dff9fca06329773514c1-1"' }>
                                            <li class="link">
                                                <a href="pipes/MergePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MergePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceStringPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceVarsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceVarsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirTooltipModule.html" data-type="entity-link" >AirTooltipModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AirTooltipModule-224b5e2de6503821a01c8d1704c23a29"' : 'data-target="#xs-components-links-module-AirTooltipModule-224b5e2de6503821a01c8d1704c23a29"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AirTooltipModule-224b5e2de6503821a01c8d1704c23a29"' :
                                            'id="xs-components-links-module-AirTooltipModule-224b5e2de6503821a01c8d1704c23a29"' }>
                                            <li class="link">
                                                <a href="components/TooltipComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TooltipComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AirTooltipModule-224b5e2de6503821a01c8d1704c23a29"' : 'data-target="#xs-directives-links-module-AirTooltipModule-224b5e2de6503821a01c8d1704c23a29"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AirTooltipModule-224b5e2de6503821a01c8d1704c23a29"' :
                                        'id="xs-directives-links-module-AirTooltipModule-224b5e2de6503821a01c8d1704c23a29"' }>
                                        <li class="link">
                                            <a href="directives/TooltipDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TooltipDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirTypographyModule.html" data-type="entity-link" >AirTypographyModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AirTypographyModule-f89f33c77193d608bf04fc84c4b9f2fc"' : 'data-target="#xs-directives-links-module-AirTypographyModule-f89f33c77193d608bf04fc84c4b9f2fc"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AirTypographyModule-f89f33c77193d608bf04fc84c4b9f2fc"' :
                                        'id="xs-directives-links-module-AirTypographyModule-f89f33c77193d608bf04fc84c4b9f2fc"' }>
                                        <li class="link">
                                            <a href="directives/AutofocusDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutofocusDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ClearInputBeforeUploadDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClearInputBeforeUploadDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ColorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HideIfEmptyDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HideIfEmptyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OverlayDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverlayDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollToMeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollToMeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TextDirectionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextDirectionDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TextDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ThemeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TitleDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TitleDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AirTypographyModule-f89f33c77193d608bf04fc84c4b9f2fc"' : 'data-target="#xs-pipes-links-module-AirTypographyModule-f89f33c77193d608bf04fc84c4b9f2fc"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AirTypographyModule-f89f33c77193d608bf04fc84c4b9f2fc"' :
                                            'id="xs-pipes-links-module-AirTypographyModule-f89f33c77193d608bf04fc84c4b9f2fc"' }>
                                            <li class="link">
                                                <a href="pipes/MergePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MergePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceStringPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceVarsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceVarsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AirZoomImageModule.html" data-type="entity-link" >AirZoomImageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' : 'data-target="#xs-components-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' :
                                            'id="xs-components-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' }>
                                            <li class="link">
                                                <a href="components/ZoomImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ZoomImageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' : 'data-target="#xs-directives-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' :
                                        'id="xs-directives-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' }>
                                        <li class="link">
                                            <a href="directives/AutofocusDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutofocusDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ClearInputBeforeUploadDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClearInputBeforeUploadDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HideIfEmptyDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HideIfEmptyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OverlayDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverlayDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollToMeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollToMeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ThemeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ZoomImageDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ZoomImageDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' : 'data-target="#xs-injectables-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' :
                                        'id="xs-injectables-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' }>
                                        <li class="link">
                                            <a href="injectables/ZoomImageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ZoomImageService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' : 'data-target="#xs-pipes-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' :
                                            'id="xs-pipes-links-module-AirZoomImageModule-99d7dc01eceb028f89ea8ab2e22f9360"' }>
                                            <li class="link">
                                                <a href="pipes/MergePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MergePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceStringPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplaceVarsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceVarsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarModule.html" data-type="entity-link" >AvatarModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AvatarModule-ef8fe868be43a39d36caa41f8c760158"' : 'data-target="#xs-directives-links-module-AvatarModule-ef8fe868be43a39d36caa41f8c760158"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AvatarModule-ef8fe868be43a39d36caa41f8c760158"' :
                                        'id="xs-directives-links-module-AvatarModule-ef8fe868be43a39d36caa41f8c760158"' }>
                                        <li class="link">
                                            <a href="directives/AvatarDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CdkModule.html" data-type="entity-link" >CdkModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModalModule.html" data-type="entity-link" >ModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalModule-66c6db999294a3b7d15e51bcd1366964"' : 'data-target="#xs-components-links-module-ModalModule-66c6db999294a3b7d15e51bcd1366964"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalModule-66c6db999294a3b7d15e51bcd1366964"' :
                                            'id="xs-components-links-module-ModalModule-66c6db999294a3b7d15e51bcd1366964"' }>
                                            <li class="link">
                                                <a href="components/ModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ActionsPortalComponent.html" data-type="entity-link" >ActionsPortalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AutocompleteComponent.html" data-type="entity-link" >AutocompleteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CheckboxComponent.html" data-type="entity-link" >CheckboxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CloseModalButtonComponent.html" data-type="entity-link" >CloseModalButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmComponent.html" data-type="entity-link" >ConfirmComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContainerComponent.html" data-type="entity-link" >ContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DelimiterComponent.html" data-type="entity-link" >DelimiterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DynamicIconComponent.html" data-type="entity-link" >DynamicIconComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ExpansionComponent.html" data-type="entity-link" >ExpansionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ExpansionHeaderComponent.html" data-type="entity-link" >ExpansionHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FileComponent.html" data-type="entity-link" >FileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FileItemComponent.html" data-type="entity-link" >FileItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormFieldComponent.html" data-type="entity-link" >FormFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderPortalComponent.html" data-type="entity-link" >HeaderPortalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconComponent.html" data-type="entity-link" >IconComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ImageComponent.html" data-type="entity-link" >ImageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputColorComponent.html" data-type="entity-link" >InputColorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LabelComponent.html" data-type="entity-link" >LabelComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListComponent.html" data-type="entity-link" >ListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListItemComponent.html" data-type="entity-link" >ListItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoaderComponent.html" data-type="entity-link" >LoaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModalComponent-1.html" data-type="entity-link" >ModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OptionComponent.html" data-type="entity-link" >OptionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageComponent.html" data-type="entity-link" >PageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PopoverComponent.html" data-type="entity-link" >PopoverComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProgressBarComponent.html" data-type="entity-link" >ProgressBarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RadioButtonComponent.html" data-type="entity-link" >RadioButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RadioGroupComponent.html" data-type="entity-link" >RadioGroupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ScrollContainerComponent.html" data-type="entity-link" >ScrollContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SelectComponent.html" data-type="entity-link" >SelectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SliderComponent.html" data-type="entity-link" >SliderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabsLinksComponent.html" data-type="entity-link" >TabsLinksComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabsLinksComponent-1.html" data-type="entity-link" >TabsLinksComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ToggleComponent.html" data-type="entity-link" >ToggleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TooltipComponent.html" data-type="entity-link" >TooltipComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ZoomImageComponent.html" data-type="entity-link" >ZoomImageComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/AbstractIndentsDirective.html" data-type="entity-link" >AbstractIndentsDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ActionsContainerDirective.html" data-type="entity-link" >ActionsContainerDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/AutofocusDirective.html" data-type="entity-link" >AutofocusDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/BreakpointsDirective.html" data-type="entity-link" >BreakpointsDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ClearInputBeforeUploadDirective.html" data-type="entity-link" >ClearInputBeforeUploadDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ColorDirective.html" data-type="entity-link" >ColorDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ContentDirective.html" data-type="entity-link" >ContentDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/DirectionDirective.html" data-type="entity-link" >DirectionDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/EndDirective.html" data-type="entity-link" >EndDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/FlexDirective.html" data-type="entity-link" >FlexDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/FooterDirective.html" data-type="entity-link" >FooterDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/GridItemDirective.html" data-type="entity-link" >GridItemDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/HeaderContainerDirective.html" data-type="entity-link" >HeaderContainerDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/HeaderDirective.html" data-type="entity-link" >HeaderDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/HideIfEmptyDirective.html" data-type="entity-link" >HideIfEmptyDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ImpositionContainerDirective.html" data-type="entity-link" >ImpositionContainerDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ImpositionDirective.html" data-type="entity-link" >ImpositionDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/InputDirective.html" data-type="entity-link" >InputDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/LayoutDirective.html" data-type="entity-link" >LayoutDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/LoadDirective.html" data-type="entity-link" >LoadDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/MarginsDirective.html" data-type="entity-link" >MarginsDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/OverlayDirective.html" data-type="entity-link" >OverlayDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/PaddingsDirective.html" data-type="entity-link" >PaddingsDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/PopoverDirective.html" data-type="entity-link" >PopoverDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ScrollDirective.html" data-type="entity-link" >ScrollDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ScrollToMeDirective.html" data-type="entity-link" >ScrollToMeDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/StartDirective.html" data-type="entity-link" >StartDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/StretchDirective.html" data-type="entity-link" >StretchDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TabLinkDirective.html" data-type="entity-link" >TabLinkDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TabLinkDirective-1.html" data-type="entity-link" >TabLinkDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TextareaAutosizeDirective.html" data-type="entity-link" >TextareaAutosizeDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TextDirectionDirective.html" data-type="entity-link" >TextDirectionDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TextDirective.html" data-type="entity-link" >TextDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ThemeDirective.html" data-type="entity-link" >ThemeDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TitleDirective.html" data-type="entity-link" >TitleDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TooltipDirective.html" data-type="entity-link" >TooltipDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ZoomImageDirective.html" data-type="entity-link" >ZoomImageDirective</a>
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
                                <a href="classes/HasElementRef.html" data-type="entity-link" >HasElementRef</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadersStaticInjector.html" data-type="entity-link" >LoadersStaticInjector</a>
                            </li>
                            <li class="link">
                                <a href="classes/ThemeSizeWrapper.html" data-type="entity-link" >ThemeSizeWrapper</a>
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
                                    <a href="injectables/ActionsLoader.html" data-type="entity-link" >ActionsLoader</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ActionsRunnerService.html" data-type="entity-link" >ActionsRunnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ActiveDirectionDispatcherService.html" data-type="entity-link" >ActiveDirectionDispatcherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AutocompleteService.html" data-type="entity-link" >AutocompleteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BreakpointsStylesManager.html" data-type="entity-link" >BreakpointsStylesManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BreakpointsStylesParserService.html" data-type="entity-link" >BreakpointsStylesParserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BreakpointsStylesState.html" data-type="entity-link" >BreakpointsStylesState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChangesState.html" data-type="entity-link" >ChangesState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClassesParserService.html" data-type="entity-link" >ClassesParserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClassesService.html" data-type="entity-link" >ClassesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DirectionService.html" data-type="entity-link" >DirectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FakeDirectionDispatcherService.html" data-type="entity-link" >FakeDirectionDispatcherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadWhenService.html" data-type="entity-link" >LoadWhenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link" >ModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService-1.html" data-type="entity-link" >ModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OnAppInitActionsRunnerService.html" data-type="entity-link" >OnAppInitActionsRunnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OptimalPositionService.html" data-type="entity-link" >OptimalPositionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PopoverService.html" data-type="entity-link" >PopoverService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PortalInjectorService.html" data-type="entity-link" >PortalInjectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PreloadActionsRunnerService.html" data-type="entity-link" >PreloadActionsRunnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouterActionsRunnerService.html" data-type="entity-link" >RouterActionsRunnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScrollService.html" data-type="entity-link" >ScrollService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelectionDispatcherService.html" data-type="entity-link" >SelectionDispatcherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StylesParserService.html" data-type="entity-link" >StylesParserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StylesService.html" data-type="entity-link" >StylesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeColorsService.html" data-type="entity-link" >ThemeColorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeNameService.html" data-type="entity-link" >ThemeNameService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WindowService.html" data-type="entity-link" >WindowService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ZoomImageService.html" data-type="entity-link" >ZoomImageService</a>
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
                                <a href="interfaces/CanColor.html" data-type="entity-link" >CanColor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CanSize.html" data-type="entity-link" >CanSize</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChangesStateSnapshot.html" data-type="entity-link" >ChangesStateSnapshot</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CounterContext.html" data-type="entity-link" >CounterContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DirectionDispatcher.html" data-type="entity-link" >DirectionDispatcher</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Disabled.html" data-type="entity-link" >Disabled</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExpansionModuleOptions.html" data-type="entity-link" >ExpansionModuleOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileComponentOptions.html" data-type="entity-link" >FileComponentOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileInterface.html" data-type="entity-link" >FileInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IconModuleOptions.html" data-type="entity-link" >IconModuleOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoaderOptions.html" data-type="entity-link" >LoaderOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotifyOptions.html" data-type="entity-link" >NotifyOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OnAppInitAction.html" data-type="entity-link" >OnAppInitAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OnRouteEndAction.html" data-type="entity-link" >OnRouteEndAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OnRouteStartAction.html" data-type="entity-link" >OnRouteStartAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OpenWindowOptions.html" data-type="entity-link" >OpenWindowOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OptimalPositionsOptions.html" data-type="entity-link" >OptimalPositionsOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ParsedLayoutAlign.html" data-type="entity-link" >ParsedLayoutAlign</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PopoverComponentInterface.html" data-type="entity-link" >PopoverComponentInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PreloadAction.html" data-type="entity-link" >PreloadAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PropName.html" data-type="entity-link" >PropName</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProvidersOptions.html" data-type="entity-link" >ProvidersOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ScrollOptions.html" data-type="entity-link" >ScrollOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ScrollTo.html" data-type="entity-link" >ScrollTo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SetPropertyOptions.html" data-type="entity-link" >SetPropertyOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StickyDirective.html" data-type="entity-link" >StickyDirective</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StylesAndClasses.html" data-type="entity-link" >StylesAndClasses</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidthAndHeight.html" data-type="entity-link" >WidthAndHeight</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/MergePipe.html" data-type="entity-link" >MergePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/ReplaceStringPipe.html" data-type="entity-link" >ReplaceStringPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/ReplaceVarsPipe.html" data-type="entity-link" >ReplaceVarsPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/SimpleAutocompletePipe.html" data-type="entity-link" >SimpleAutocompletePipe</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
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