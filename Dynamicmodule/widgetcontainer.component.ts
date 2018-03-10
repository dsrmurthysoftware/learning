/*
import {
Component, 
ViewContainerRef,
Compiler,
ComponentFactory,
ComponentFactoryResolver,
ModuleWithComponentFactories,
ComponentRef,
ReflectiveInjector,
SystemJsNgModuleLoader } from '@angular/core';

class ModuleNode {
    modulePath: string;
    componentName: string;
}

@Component({
    moduleId: module.id,
    selector: 'widgetContainer',
    templateUrl: './widgetContainer.component.html'
})

export class WidgetContainerComponent {
    widgetConfig: string;
    module: ModuleNode;
    cmpRef: ComponentRef<any>;

constructor(private widgetService: WidgetLoader,
    private viewref: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private loader: SystemJsNgModuleLoader,
    private compiler: Compiler){}

openWebApp(menu:any) {
    this.loader.load(menu.modulePath)  // load the module and its components
        .then((modFac) => {
            // the missing step, need to use Compiler to resolve the module's embedded components
            this.compiler.compileModuleAndAllComponentsAsync<any>
                 (modFac.moduleType)

                .then((factory: ModuleWithComponentFactories<any>) => {
                    return factory.componentFactories.find(x => x.componentType.name === menu.componentName);
                })
                .then(cmpFactory => {

                    // need to instantiate the Module so we can use it as the provider for the new component
                    let modRef = modFac.create(this.viewref.parentInjector);
                    this.cmpRef = this.viewref.createComponent(cmpFactory, 0, modRef.injector);
                    // done, now Module and main Component are known to NG2

                });
        });
}

ngOnDestroy() {
    if (this.cmpRef) {
        this.cmpRef.destroy();
    }
}

*/