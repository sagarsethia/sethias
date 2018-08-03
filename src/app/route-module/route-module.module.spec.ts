import { RouteModuleModule } from './route-module.module';

describe('RouteModuleModule', () => {
  let routeModuleModule: RouteModuleModule;

  beforeEach(() => {
    routeModuleModule = new RouteModuleModule();
  });

  it('should create an instance', () => {
    expect(routeModuleModule).toBeTruthy();
  });
});
